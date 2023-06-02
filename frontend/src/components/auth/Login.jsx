import Form from "../Form";
import Input from "../Input";
import { useGlobalContext } from "../../context/context";

function Login() {
    const {
        email,
        password,
        setEmail,
        setPassword
    } = useGlobalContext();

    return (
        <div className="flex justify-center items-center">
            <Form title="Sign in" to="/register" link="Need an account?" buttonText="Sign in">
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

export default Login;