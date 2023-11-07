import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserEmail } from "./AuthAPIManager";

export const Login = () => {
    const [email, set] = useState();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        return getUserEmail(email).then((foundUsers) => {
            if (foundUsers.length === 1) {
                const user = foundUsers[0];
                localStorage.setItem(
                    "activeUser",
                    JSON.stringify({
                        id: user.id,
                    })
                );

                navigate("/");
            } else {
                window.alert("Invalid login");
            }
        });
    };

    return (
        <main className='container--login'>
            <section>
                <form className='form--login' onSubmit={handleLogin}>
                    <h2>Sign in to view your PathBoard:</h2>
                    <div class="field">
                        <label class="label">Email Address</label>
                        <div class="control">
                            <input id="inputEmail"
                                type='email'
                                onChange={(evt) => set(evt.target.value)}
                                className='input'
                                placeholder='Email address'
                                required
                                autoFocus />
                        </div>
                    </div>
                    <fieldset>
                        <button class='button is-warning'>Sign in</button>
                    </fieldset>
                </form>
            </section>
            <section className='link--register'>
                <Link to='/register'>Not a member yet?</Link>
            </section>
        </main>
    );
};