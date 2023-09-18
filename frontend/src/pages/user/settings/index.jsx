import React, { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import Container from "components/Container";
import { useGlobalContext } from "context/context";
import { userInformation } from "constants";

export default function Settings() {
    // global states
    const {
        updateUser,
        changePassword,
        updateUserLoading,
        changePasswordLoading,
    } = useGlobalContext();

    // local states
    const [isChange, setIsChange] = useState(false);
    const [userAvatarUpdate, setUserAvatarUpdate] = useState(null);
    const [userNameUpdate, setUserNameUpdate] = useState(userInformation?.username);
    const [userEmailUpdate, setUserEmailUpdate] = useState(userInformation?.email);
    const [isOpen, setIsOpen] = useState(false);

    // Using formik to validate password fields
    const formik = useFormik({
        initialValues: {
            password: "",
            newPassword: "",
            confirmNewPassword: "",
        },
        validationSchema: Yup.object({
            password: Yup
                .string()
                .min(6, "Your password must be at least 6 characters")
                .required("You must enter your current password"),
            newPassword: Yup
                .string()
                .min(6, "Your password must be at least 6 characters")
                .required("You must enter your new password"),
            confirmNewPassword: Yup
                .string()
                .oneOf([Yup.ref("newPassword")], "New password does not match")
                .required("You must enter your new password")
        }),
        onSubmit: (values, { resetForm }) => {
            changePassword(values);
            resetForm({ values: "" });
        }
    });

    // Input options
    const options = [
        {
            id: "username",
            htmlFor: "username",
            value: userNameUpdate,
            type: "text",
            onChange: setUserNameUpdate,
        },
        {
            id: "email",
            htmlFor: "email",
            value: userEmailUpdate,
            type: "email",
            onChange: setUserEmailUpdate,
        },
    ];

    // Validate password fields with formik
    const passwords = [
        {
            autoComplete: "password",
            id: "password",
            name: "password",
            htmlFor: "password",
            placeholder: "**********",
            type: "password",
            value: formik.values.password,
            errors: formik.errors.password,
            touched: formik.touched.password,
            onChange: formik.handleChange,
        },
        {
            autoComplete: "new-password",
            id: "new password",
            name: "newPassword",
            htmlFor: "new password",
            placeholder: "**********",
            type: "password",
            value: formik.values.newPassword,
            errors: formik.errors.newPassword,
            touched: formik.touched.newPassword,
            onChange: formik.handleChange,
        },
        {
            autoComplete: "current-password",
            id: "confirm new password",
            name: "confirmNewPassword",
            htmlFor: "confirm new password",
            placeholder: "**********",
            type: "password",
            value: formik.values.confirmNewPassword,
            errors: formik.errors.confirmNewPassword,
            touched: formik.touched.confirmNewPassword,
            onChange: formik.handleChange,
        },
    ];

    // Preview avatar
    const handleFile = (e) => {
        const fileUpload = e.target.files[0];
        const previewUrl = URL.createObjectURL(fileUpload);
        fileUpload.preview = previewUrl;
        setUserAvatarUpdate(fileUpload);
    }

    // When user click update button
    const handleUpdate = () => {
        const formData = {
            userAvatarUpdate,
            userNameUpdate,
            userEmailUpdate,
        };
        console.log(formData);
        updateUser(formData);
    }

    // When user click cancel button
    const handleCancel = () => {
        setIsChange(false);
        setUserNameUpdate(userInformation?.username);
        setUserEmailUpdate(userInformation?.email);
    }

    // disable & enable save button
    const disableSaveBtn = (isChange && !updateUserLoading) ?
        "bg-sky-500 hover:bg-sky-600" :
        "bg-sky-300 cursor-not-allowed";

    // disable & enable change password button
    const disablePasswordBtn =
        (formik.values.password
            && formik.values.newPassword
            && formik.values.confirmNewPassword
        ) ? "bg-sky-500" : "bg-sky-300 cursor-not-allowed";

    return (
        <Container styles="h-screen">
            <div className="mx-auto mt-10 md:w-[720px] overflow-hidden p-8">
                <div className="flex items-center justify-center w-32 h-32">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center rounded-full justify-center w-full h-full border-2 border-gray-300 cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        {!userAvatarUpdate && <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <AiOutlineCamera className="w-12 h-12 text-gray-300" />
                        </div>}
                        {userAvatarUpdate && <img className="w-full h-full object-cover rounded-full" src={userAvatarUpdate.preview} alt="avatar" />}
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleFile} />
                    </label>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-6 mt-12">
                    {options.map(option => (
                        <div key={option.id} className="col-span-1">
                            <label
                                htmlFor={option.htmlFor}
                                className="block text-xs uppercase font-semibold mb-1 text-gray-600"
                            >
                                {option.id}
                            </label>
                            <input
                                value={option.value}
                                type={option.type}
                                id={option.id}
                                onChange={(e) => {
                                    option.onChange(e.target.value);
                                    setIsChange(true);
                                }}
                                className="w-full h-12 py-2 px-3 bg-gray-350 border border-gray-300 rounded outline-none focus:bg-white mb-4"
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="h-12 w-full border border-gray-200 rounded my-5 hover:bg-gray-350"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Change password
                </button>
                {isOpen &&
                    <form onSubmit={formik.handleSubmit}>
                        {passwords.map(password => (
                            <div key={password.id} className="my-5">
                                <label className="block text-xs uppercase font-semibold mb-1 text-gray-600" htmlFor={password.htmlFor}>{password.id}</label>
                                <input
                                    autoComplete={password.autoComplete}
                                    className="w-full h-12 py-2 px-3 bg-gray-350 border border-gray-300 rounded outline-none focus:bg-white"
                                    placeholder={password.placeholder}
                                    name={password.name}
                                    type={password.type}
                                    id={password.id}
                                    value={password.value}
                                    onChange={password.onChange}
                                />
                                {
                                    password.errors &&
                                    password.touched &&
                                    (<p className="text-xs text-red-500 mt-2">{password.errors}</p>)
                                }
                            </div>
                        ))}
                        <button
                            type="submit"
                            className={`w-full text-white rounded-full px-5 py-2.5 text-center ${disablePasswordBtn}`}
                            disabled={!changePasswordLoading && (!formik.values.password
                                && !formik.values.newPassword
                                && !formik.values.confirmNewPassword
                            )}
                        >
                            {changePasswordLoading ? "Change..." : "Change"}
                        </button>
                    </form>
                }
                <div className="flex flex-row-reverse py-6">
                    <button
                        type="button"
                        className={`text-white h-10 px-6 rounded-full ml-2 ${disableSaveBtn}`}
                        onClick={handleUpdate}
                        disabled={!updateUserLoading && !isChange}
                    >
                        {updateUserLoading ? "Update..." : "Update"}
                    </button>
                    <button
                        type="button"
                        className="h-10 px-6 rounded-full shadow border hover:bg-gray-200"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </Container>
    );
}