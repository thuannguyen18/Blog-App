import Form from "../Form";
import Input from "../Input";
import { useGlobalContext } from "../../context/context";

function Register() {
    const {
        name,
        email,
        password,
        setName,
        setEmail,
        setPassword
    } = useGlobalContext();

    return (
        <div className="flex justify-center items-center md:h-[80vh]">
            <Form title="Sign up" to="/login" link="Already have an account?" buttonText="Sign up">
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

export default Register;