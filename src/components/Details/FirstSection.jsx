'use client'
import Image from "next/image";
import { FaThumbsUp, FaRegCalendarAlt, FaRegClock, FaRegEye } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { useEffect, useState } from "react";
import { updateLike, updateView } from "@/lib/data/data";

const FirstSection = ({ postDetailes }) => {
    const [like, setLike] = useState(false)
    const [likesCount, setLikesCount] = useState(postDetailes.like)

    const handleLike = async () => {
        if (like) return
        setLike(true)
        const res = await updateLike(postDetailes._id)
        setLikesCount(likesCount + 1)
    }


    useEffect(() => {
        const viewed = sessionStorage.getItem(
            `viewed-${postDetailes._id}`
        )

        if (viewed) return

        const timer = setTimeout(async () => {

            await updateView(postDetailes._id)

            sessionStorage.setItem(
                `viewed-${postDetailes._id}`,
                'true'
            )

        }, 5000)

        return () => clearTimeout(timer)

    }, [postDetailes._id])

    return (
        <div className="bg-[#eef2f7] min-h-screen p-3 md:p-5">

            <div className="bg-white border border-[#d8dee7] rounded-2xl p-3 md:p-4 shadow-sm">

                {/* VIDEO / IMAGE */}
                <div className="overflow-hidden rounded-2xl border border-[#d8dee7]">

                    <Image
                        className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover"
                        src={postDetailes.pic}
                        width={700}
                        height={700}
                        alt={postDetailes.title}
                    />

                </div>

                {/* ACTION BUTTONS */}
                <div className="grid grid-cols-3 gap-2 md:flex md:justify-end mt-4">

                    <div className="flex flex-row-reverse md:flex-row justify-center items-center gap-2">
                        <p className="font-medium">{likesCount}</p>
                        <button onClick={handleLike} className={`${like && 'disabled:z-auto'} cursor-pointer  border border-[#d8dee7] rounded px-2 bg-white flex items-center justify-center gap-2 text-[#13253d] hover:bg-[#f6f8fb] transition`}>
                            <FaThumbsUp className={`opacity-45 ${like && 'opacity-100'}`} />
                            <span>Like</span>
                        </button>
                    </div>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-8">

                    <h2 className="text-[22px] md:text-[32px] font-black text-[#13253d] leading-tight">
                        {postDetailes.title}
                    </h2>

                    <span className="flex justify-between items-center mt-4">

                        <p className="text-[22px] font-bold text-[#13253d]">
                            Video Description
                        </p>

                    </span>

                    <p className="mt-4 text-[15px] md:text-[17px] leading-8 text-[#4f5b6b]">
                        {postDetailes.description}
                    </p>

                </div>

                {/* META */}
                <div className="mt-8">

                    <h3 className="text-[20px] font-bold text-[#13253d]">
                        Meta-data
                    </h3>

                    <p className="mt-2 text-[16px] text-[#5f6b7a]">
                        {postDetailes.date}
                    </p>

                </div>

                {/* ABOUT VIDEO */}
                <div className="mt-10 border-t border-[#d8dee7] pt-8">

                    <h4 className="text-[24px] font-bold text-[#13253d] mb-5">
                        About this video
                    </h4>

                    <div className="bg-white border border-[#d8dee7] rounded-2xl overflow-hidden">

                        <div className="grid grid-cols-2 md:grid-cols-4">

                            {/* Published */}
                            <div className="p-5 md:p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-[#d8dee7]">

                                <FaRegCalendarAlt className="text-[28px] text-[#13253d]" />

                                <h5 className="mt-4 text-[15px] font-semibold text-[#13253d]">
                                    Published
                                </h5>

                                <p className="mt-1 text-[#5f6b7a] text-sm">
                                    {postDetailes.date}
                                </p>

                            </div>

                            {/* Duration */}
                            <div className="p-5 md:p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-[#d8dee7]">

                                <FaRegClock className="text-[28px] text-[#13253d]" />

                                <h5 className="mt-4 text-[15px] font-semibold text-[#13253d]">
                                    Duration
                                </h5>

                                <p className="mt-1 text-[#5f6b7a]">
                                    {postDetailes.duration}
                                </p>

                            </div>

                            {/* Category */}
                            <div className="p-5 md:p-8 flex flex-col items-center text-center md:border-r border-[#d8dee7]">

                                <BiCategory className="text-[30px] text-[#13253d]" />

                                <h5 className="mt-4 text-[15px] font-semibold text-[#13253d]">
                                    Category
                                </h5>

                                <p className="mt-1 text-[#5f6b7a]">
                                    {postDetailes.category}
                                </p>

                            </div>

                            {/* Views */}
                            <div className="p-5 md:p-8 flex flex-col items-center text-center">

                                <FaRegEye className="text-[28px] text-[#13253d]" />

                                <h5 className="mt-4 text-[15px] font-semibold text-[#13253d]">
                                    Views
                                </h5>

                                <p className="mt-1 text-[#5f6b7a]">
                                    {postDetailes.view}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default FirstSection;