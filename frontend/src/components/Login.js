import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import HoverButtonStatic from "./Utilities/HoverButtonStatic";

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        const { username, password } = credentials;
        if (!username || !password) {
            setError('Please fill in both fields.');
            return;
        }

        setError('');

        const formData = { username, password };

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                
                // Assuming the token is in response data
                localStorage.setItem('authToken', data.token);

                setCredentials({ username: '', password: '' });

                // Redirect to blog form upon successful login
                navigate('/blogform');
            } else {
                setError('Invalid login credentials');
            }
        } catch (error) {
            setError('Something went wrong. Please try again.');
        }
    }, [credentials, navigate]);

    useEffect(() => {
        // Cleanup function to reset error when component unmounts
        return () => {
            setError('');
        };
    }, []);

    return (
        <div className="login-form-container row pt-5 p-2">
            <div className="col-md-6 px-5 d-flex justify-content-center align-items-center p-5">
                <h2 className='login-heading px-5'>Login to Your <span className='head-highlight'>Account</span></h2>
            </div>
            <div className="col-md-4 px-5 py-3 login-form-cont">
                <form onSubmit={handleSubmit} className="my-4">
                    <div className="mb-3">
                        <label htmlFor="username" className="login-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="login-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {error && <div className="text-danger mt-2">{error}</div>}
                    <div className="d-flex login-btn-cont justify-content-center mt-4">
                        <HoverButtonStatic text={'Login'} mode={'dark'} clickEvent={handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
