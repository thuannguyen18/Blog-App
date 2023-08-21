import AlertMessage from "components/AlertMessge";
import Form from "components/Form";
import Input from "components/Input";
import { useGlobalContext } from "context/context";

export default function Register() {
    const {
        name,
        email,
        password,
        setName,
        setEmail,
        setPassword,
        isAlert
    } = useGlobalContext();

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
                <Input
                    value={name}
                    label="Username"
                    htmlFor="username"
                    id="username"
                    type="text"
                    placeholder="John Doe"
                    onChange={setName}
                />
                <Input
                    value={email}
                    label="Email"
                    htmlFor="email"
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    onChange={setEmail}
                />
                <Input
                    value={password}
                    label="Password"
                    htmlFor="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    onChange={setPassword}
                />
            </Form>
        </div>
    );
}