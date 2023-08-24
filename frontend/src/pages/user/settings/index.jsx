import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from "formik";
import * as Yup from "yup";

import Container from "components/Container";
import Loading from "components/Loading";
import { AiOutlineCamera } from "react-icons/ai";
import { useGlobalContext } from "context/context";

export default function Settings() {
    const {
        userId,
        userAvatar,
        userNameUpdate,
        userEmailUpdate,
        setUserName,
        setUserEmail,
        setUserAvatar,
        isChange,
        setDefault,
        updateUser,
        changePassword,
        toastMessage,
        updateUserLoading,
        changePasswordLoading,
    } = useGlobalContext();
    const [isOpen, setIsOpen] = useState(false);

    const toastMsg = (message) => {
        toast.success(message, {
            autoClose: 6000
        });
    }

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
        onSubmit: (values) => {
            changePassword(values);
            console.log(toastMessage)
            toastMsg(toastMessage);
        }
    });

    const options = [
        {
            id: "username",
            htmlFor: "username",
            value: userNameUpdate,
            type: "text",
            onChange: setUserName,
        },
        {
            id: "email",
            htmlFor: "email",
            value: userEmailUpdate,
            type: "email",
            onChange: setUserEmail,
        },
    ];


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

    const handleFile = (e) => {
        const fileUpload = e.target.files[0];
        const previewUrl = URL.createObjectURL(fileUpload);
        fileUpload.preview = previewUrl;
        setUserAvatar(fileUpload);
    }

    const disableSaveBtn = isChange && !updateUserLoading ? "bg-sky-500 hover:bg-sky-600" : "bg-sky-300 cursor-not-allowed";
    const disablePasswordBtn =
        (formik.errors.password === undefined
            && formik.errors.newPassword === undefined
            && formik.errors.confirmNewPassword === undefined
        ) ? "bg-sky-500" : "bg-sky-300 cursor-not-allowed";

    return (
        <>
            <Container>
                <div className="mx-auto mt-10 md:w-[720px] overflow-hidden p-8">
                    <div className="flex items-center justify-center w-32 h-32">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center rounded-full justify-center w-full h-full border-2 border-gray-300 cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            {!userAvatar && <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <AiOutlineCamera className="w-12 h-12 text-gray-300" />
                            </div>}
                            {userAvatar && <img className="w-full h-full object-cover rounded-full" src={userAvatar.preview} alt="avatar" />}
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
                                    onChange={(e) => option.onChange(e.target.value)}
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
                            >
                                {changePasswordLoading ? <Loading width="h-6" heigth="h-6" /> : "Change"}
                            </button>
                        </form>
                    }
                    <div className="flex flex-row-reverse py-6">
                        <button
                            type="button"
                            className={`text-white h-10 px-6 rounded-full ml-2 ${disableSaveBtn}`}
                            onClick={updateUser}
                        >
                            {updateUserLoading ? <Loading width="h-6" heigth="h-6" /> : "Update"}
                        </button>
                        <button
                            type="button"
                            className="h-10 px-6 rounded-full shadow border hover:bg-gray-200"
                            onClick={setDefault}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Container>
            <ToastContainer />
        </>
    );
}