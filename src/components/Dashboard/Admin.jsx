"use client";

import { useState } from "react";
import NewBlog from "./NewBlog";
import MyPosts from "./MyPosts";

const Admin = ({ user }) => {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="w-full min-h-screen bg-gray-50 py-10">
            <div className="max-w-6xl mx-auto px-4">
                {/* Tabs */}
                <div className="flex border-b mb-8">
                    <button
                        onClick={() => setActiveTab("overview")}
                        className={`px-4 py-2 mr-2 rounded-t-lg transition-colors duration-300
              ${activeTab === "overview"
                                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        Add New Post
                    </button>

                    <button
                        onClick={() => setActiveTab("analytics")}
                        className={`px-4 py-2 rounded-t-lg transition-colors duration-300
              ${activeTab === "analytics"
                                ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        My Posts
                    </button>
                </div>

                {/* Tab Content */}
                <div className="w-full">
                    {activeTab === "overview" && <NewBlog user={user} setActiveTab={setActiveTab} />}
                    {activeTab === "analytics" && <MyPosts user={user} />}
                </div>
            </div>
        </div>
    );
};

export default Admin;