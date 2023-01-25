import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import amazon_logo from "../../src/assets/amazon_logo.png";
import "./signup.css";

const SignIn = () => {
    const [logData, setData] = useState({
        email: "pavan3@gmail.com",
        password: "Pavan@4321",
    });

    console.log('logData', logData)

    const addData = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target
        setData(() => {
            return {
                ...logData,
                [name]: value
            }
        })
    }

    const saveData = async (e) => {
        e.preventDefault();
        const { email, password } = logData
        console.log("email and password",email, password);
        try {
            console.log("inside tryyyyyy");
            const res = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            const data = await res.json();
            console.log("data123445", data);

            if (res.status === 400 || !data) {
                toast.error("Invalid Details 👎!", {
                    position: "top-center"
                });
            } else {
                console.log("Data Valid")
                setData({
                    ...logData, email: "",
                    password: ""
                });
                toast.success("login Successfully done 😃!", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.log("front end ka catch error hai" + error.message);
        }
    }


    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src={amazon_logo} alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Sign-In</h1>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={logData.email}
                                onChange={addData}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="At least 6 characters"
                                value={logData.password}
                                onChange={addData}
                            />
                        </div>
                        <button type="submit" className="signin_btn" onClick={saveData}>
                            Continue
                        </button>
                        
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </section>
    );
};

export default SignIn;
