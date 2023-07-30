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
        setPassword
    } = useGlobalContext();

    return (
        <div className="flex justify-center items-center md:h-[100vh] pt-20">
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