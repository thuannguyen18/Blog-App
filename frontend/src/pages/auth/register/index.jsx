import AlertMessage from "components/AlertMessge";
import Form from "components/Form";
import Input from "components/Input";
import { useGlobalContext } from "context/context";

export default function Register() {
    const {
        username,
        email,
        password,
        setName,
        setEmail,
        setPassword,
        isAlert
    } = useGlobalContext();

    console.log(username);
    console.log(email);
    console.log(password);

    const inputs = [
        {
            value: username,
            id: "username",
            label: "Username",
            htmlFor: "username",
            type: "text",
            placeholder: "email@example.com",
            onChange: setName,
        },
        {
            value: email,
            id: "email",
            label: "Email",
            htmlFor: "email",
            type: "email",
            placeholder: "email@example.com",
            onChange: setEmail,
        },
        {
            value: password,
            label: "Password",
            htmlFor: "password",
            id: "password",
            type: "password",
            placeholder: "password",
            onChange: setPassword,
        }
    ];

    return (
        <div className="relative flex flex-col justify-center items-center h-screen">
            {isAlert && <AlertMessage />}
            <Form
                title="Sign up"
                to="/login"
                text="Already have an account?"
                buttonText="Sign up"
                linkText="Sign in"
            >
                {inputs.map(input => (
                    <Input
                        key={input.id}
                        value={input.value}
                        label={input.label}
                        htmlFor={input.htmlFor}
                        id={input.id}
                        type={input.type}
                        placeholder={input.placeholder}
                        onChange={input.onChange}
                    />
                ))}
            </Form>
        </div>
    );
}