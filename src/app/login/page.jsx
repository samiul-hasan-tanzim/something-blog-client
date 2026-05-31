'use client'
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignInPage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signIn.email({
            ...userData
        });
        if (data) redirect('/dashboard')
        if (error) {
            alert(error.message)
            return
        }
    }


    return (
        <form
            onSubmit={handleSubmit}
            className="min-h-screen bg-[#eef2f7] flex items-center justify-center p-4"
        >

            <div className="w-full max-w-md bg-white border border-[#d8dee7] rounded-3xl shadow-sm p-6 md:p-8">

                {/* HEADER */}
                <div className="text-center mb-8">

                    <h1 className="text-[32px] font-black text-[#13253d]">
                        Sign In
                    </h1>
                </div>

                {/* EMAIL */}
                <div className="mb-5">

                    <label
                        htmlFor="email"
                        className="block text-[#13253d] font-semibold mb-2"
                    >
                        Email Address
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        className="w-full h-12 px-4 rounded-xl border border-[#d8dee7] outline-none bg-white focus:border-[#13253d] transition"
                    />

                </div>

                {/* PASSWORD */}
                <div className="mb-6">

                    <label
                        htmlFor="password"
                        className="block text-[#13253d] font-semibold mb-2"
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="Enter your password"
                        className="w-full h-12 px-4 rounded-xl border border-[#d8dee7] outline-none bg-white focus:border-[#13253d] transition"
                    />

                </div>

                {/* BUTTON */}
                <button
                    type="submit"
                    className="w-full h-12 bg-[#13253d] hover:bg-[#1a3150] text-white font-semibold rounded-xl transition-all duration-300"
                >
                    Sign In
                </button>

            </div>

        </form>
    );
};

export default SignInPage;