'use client'

import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signUp.email({
            ...userData
        });
        console.log(data, error)
    }


    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default SignUpPage;