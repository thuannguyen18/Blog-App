import Form from "components/Form";
import Input from "components/Input";
import { useGlobalContext } from "context/context";

export default function Login() {
    const {
        email,
        password,
        setEmail,
        setPassword
    } = useGlobalContext();

    return (
        <div className="flex justify-center items-center h-screen">
            <Form
                title="Sign in"
                to="/register"
                text="Need an account?"
                buttonText="Sign in"
                linkText="Sign up"
            >
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