import { useState } from "react";
import AlertMessage from "components/AlertMessge";
import Form from "components/Form";
import Input from "components/Input";
import { useGlobalContext } from "context/context";
import { useEffect } from "react";

export default function Login() {
    // Global State
    const {
        email,
        password,
        setEmail,
        setPassword,
        isAlert
    } = useGlobalContext();

    const inputs = [
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

    useEffect(() => {
        document.title = "Login";
    });

    return (
        <div className="flex justify-center items-center h-screen">
            {isAlert && <AlertMessage />}
            <Form
                title="Sign in"
                to="/register"
                text="Need an account?"
                buttonText="Sign in"
                linkText="Sign up"
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