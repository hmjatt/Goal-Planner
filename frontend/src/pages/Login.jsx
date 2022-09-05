import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const onFormChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Login and plan those goals</p>
            </section>

            <section className="form">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={onFormChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Enter password"
                            onChange={onFormChange}
                        />
                    </div>
                    <div className="form-group">
                        <buttom type="submit" className="btn btn-block">
                            Submit
                        </buttom>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Login;
