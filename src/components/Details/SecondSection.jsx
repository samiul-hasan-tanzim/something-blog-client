'use client'
import { postComment } from "@/lib/data/data";
import { FaRegFileVideo, FaDownload, FaUserCircle } from "react-icons/fa";

const SecondSection = ({ postDetailes }) => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newComment = Object.fromEntries(formData.entries());
        const res = await postComment(newComment, postDetailes._id)
        window.location.reload(`/${postDetailes._id}`);
    };


    return (
        <div className="bg-[#eef2f7] min-h-screen p-3 md:p-5">

            <div className="md:sticky md:top-5 flex flex-col gap-5">

                {/* DOWNLOAD CARD */}
                <div className="bg-white border border-[#d8dee7] rounded-2xl p-4 md:p-6 shadow-sm">

                    <div className="flex items-center justify-between mb-5">

                        <h3 className="text-[24px] md:text-[28px] font-bold text-[#13253d]">
                            Download Video
                        </h3>

                        <FaDownload className="text-[#13253d] text-[20px]" />

                    </div>

                    {/* FILE */}
                    <div className="border border-[#d8dee7] rounded-xl overflow-hidden">

                        <div className="flex items-center justify-between p-4 border-b border-[#d8dee7]">

                            <div className="flex items-center gap-3">

                                <FaRegFileVideo className="text-[28px] text-[#13253d]" />

                                <div>

                                    <p className="font-semibold text-[#13253d]">
                                        MP4 Format
                                    </p>

                                    <p className="text-sm text-[#5f6b7a]">
                                        HD Download
                                    </p>

                                </div>

                            </div>

                            <a
                                href={postDetailes.vid}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-xl border border-[#d8dee7] flex items-center justify-center hover:bg-[#f6f8fb] transition"
                            >
                                <FaDownload />
                            </a>

                        </div>
                    </div>

                </div>

                {/* COMMENTS CARD */}
                <div className="bg-white border border-[#d8dee7] rounded-2xl p-4 md:p-6 shadow-sm">

                    <h5 className="text-[24px] font-bold text-[#13253d] mb-5">
                        Comments ({postDetailes.comments.length})
                    </h5>

                    <div className="space-y-5">

                        {
                            postDetailes.comments.map((comment, i) => (

                                <div
                                    key={i}
                                    className="pb-5 border-b border-[#e7ebf1] last:border-b-0 last:pb-0"
                                >

                                    <div className="flex gap-3">

                                        <FaUserCircle className="text-[48px] text-[#8a97a8] flex-shrink-0" />

                                        <div>

                                            <p className="font-bold text-[#13253d] text-[18px]">
                                                {comment.user}
                                            </p>

                                            <p className="mt-1 text-[#4f5b6b] leading-7 text-[15px]">
                                                {comment.text}
                                            </p>

                                        </div>

                                    </div>

                                </div>
                            ))
                        }

                    </div>

                    {/* COMMENT FORM */}
                    <div className="mt-8">

                        <form onSubmit={onSubmit} className="border border-[#d8dee7] rounded-2xl p-4 bg-[#f8fafc]">

                            <label className="block mb-4">

                                <span className="hidden">
                                    Your name
                                </span>

                                <input
                                    required
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full h-12 border border-[#d8dee7] rounded-xl px-4 outline-none focus:border-[#13253d] bg-white"
                                />

                            </label>

                            <label className="block">

                                <span className="hidden">
                                    Comment
                                </span>

                                <textarea
                                    required
                                    name="comment"
                                    placeholder="comment / reply"
                                    rows={5}
                                    className="w-full border border-[#d8dee7] rounded-xl p-4 outline-none resize-none focus:border-[#13253d] bg-white"
                                />

                            </label>

                            <div className="flex justify-end mt-4">

                                <button
                                    type="submit"
                                    className="bg-[#7d97b0] hover:bg-[#68839d] text-white font-medium px-6 md:px-8 py-3 rounded-xl transition"
                                >
                                    Post Comment
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SecondSection;