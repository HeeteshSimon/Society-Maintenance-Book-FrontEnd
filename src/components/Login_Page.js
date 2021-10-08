import React, { useState } from 'react'
import { useHistory } from 'react-router';
const Login_Page = () => {

    let history = useHistory();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please enter your email and password");
            return;
        }
        //call the api
        // axios.post(`http://localhost:8080/askas`).then((res) => {
        //     res.data == "success" ?{ history.push("/dashboard")} : setError();
        // }).catch((e) => console.log(e));
        localStorage.setItem("user", "anurag");
        localStorage.setItem("isLoggedIn", true);
        history.push("/dashboard");
        setLoading(true);

    };
    return (
        <>
            <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">
                <div className="card card-container-login shadow-lg p-3" style={{ width: "25vw" }}>
                    <h3>Login Here</h3>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Email</label>
                            <input
                                type="email"
                                className="form-control "
                                name="email"
                                onChange={handleOnChangeEmail}
                                value={email}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={handleOnChangePassword}
                                value={password}
                            />
                        </div>
                        <br />
                        <div className="form-group" style={{ marginTop: "2%" }}>
                            <button
                                className="btn btn-primary btn-block rounded-pill shadow w-100"
                                disabled={loading}
                            >
                                <span>Login</span>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                            </button>
                        </div>

                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login_Page;