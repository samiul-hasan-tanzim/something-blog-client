"use client";

import { getDataByUser } from "@/lib/data/data";
import Link from "next/link";
import { useEffect, useState } from "react";

const MyPosts = ({ user }) => {
    const [myPost, setMyPost] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getDataByUser(user?.email);
            setMyPost(data || []);
        };
        getData();
    }, [user?.email]);


    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold text-[#13253d] mb-6">
                My Posts ({myPost.length})
            </h2>

            {myPost.length === 0 ? (
                <p className="text-gray-500">No posts found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {myPost.map((post) => (
                        <Link key={post._id} href={`/${post._id}`}>
                            <div

                                className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
                            >
                                {/* IMAGE */}
                                {post.pic && (
                                    <img
                                        src={post.pic}
                                        alt={post.title}
                                        className="w-full h-40 object-cover"
                                    />
                                )}

                                {/* CONTENT */}
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-[#13253d] line-clamp-1">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {post.category}
                                    </p>

                                    <p className="text-sm text-gray-400 mt-1">
                                        {post.date}
                                    </p>

                                    <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
                                        <span>❤️ {post.like}</span>
                                        <span>👁️ {post.view}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyPosts;