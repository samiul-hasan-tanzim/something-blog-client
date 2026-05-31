import Link from "next/link";
import { FaThumbsUp } from "react-icons/fa6";

const SearchFilterResult = ({ allData }) => {
    return (
        <div className="flex flex-col gap-5">

            {
                allData.map((data, i) => (

                    <Link
                        href={`${data._id}`}
                        key={i}>
                        <div
                            className="bg-[#d6dde7] border border-[#bcc6d3] rounded-[22px] overflow-hidden shadow-sm"
                        >

                            {/* CARD */}
                            <div className="flex flex-row">

                                {/* LEFT SIDE */}
                                <div className="flex-1 p-3 md:p-5 flex flex-col justify-between min-w-0">

                                    {/* TOP */}
                                    <div>

                                        {/* AUTHOR */}
                                        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">

                                            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">

                                                <span className="font-semibold">{data.author.charAt(0)}</span>

                                            </div>

                                            <div className="min-w-0">

                                                <h3 className="text-[12px] md:text-[15px] font-bold text-[#13253d] leading-none truncate">
                                                    {data.author}
                                                </h3>

                                                <p className="text-[10px] md:text-[11px] text-[#5d6878] mt-1 truncate">
                                                    {data.date}
                                                </p>

                                            </div>

                                        </div>

                                        {/* TITLE */}
                                        <h2 className="text-[15px] sm:text-[17px] md:text-[30px] font-black text-[#13253d] leading-tight line-clamp-2">
                                            {data.title}
                                        </h2>

                                        {/* DESCRIPTION */}
                                        <p className="mt-2 md:mt-3 text-[11px] sm:text-[12px] md:text-[15px] leading-5 md:leading-7 text-[#4f5b6b] line-clamp-3 md:line-clamp-4">
                                            {data.description}
                                        </p>

                                    </div>

                                    {/* BOTTOM */}
                                    <div className="mt-3 md:mt-5 flex items-center justify-between gap-3 flex-wrap">

                                        {/* STATS */}
                                        <div className="flex items-center gap-2 md:gap-4 flex-wrap">

                                            {/* COMMENTS */}
                                            <div className="flex items-center gap-1 text-[#4f5b6b]">

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-3.5 h-3.5 md:w-5 md:h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.127-3.381A6.934 6.934 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
                                                </svg>

                                                <span className="text-[10px] md:text-[13px] font-medium">
                                                    {data.comments.length}
                                                </span>

                                            </div>

                                            {/* VIEW */}
                                            <div className="flex items-center gap-1 text-[#4f5b6b]">

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-3.5 h-3.5 md:w-5 md:h-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M10 3C5 3 1.73 7.11.46 9.08a1.5 1.5 0 000 1.84C1.73 12.89 5 17 10 17s8.27-4.11 9.54-6.08a1.5 1.5 0 000-1.84C18.27 7.11 15 3 10 3zm0 11a4 4 0 110-8 4 4 0 010 8z" />
                                                </svg>

                                                <span className="text-[10px] md:text-[13px] font-medium">
                                                    {data.view}
                                                </span>

                                            </div>

                                            {/* LIKE */}
                                            <div className="flex items-center gap-1 text-[#4f5b6b]">

                                                <FaThumbsUp />

                                                <span className="text-[10px] md:text-[13px] font-medium">
                                                    {data.like}
                                                </span>

                                            </div>

                                        </div>

                                        {/* CATEGORY */}
                                        <div className="bg-[#13253d] text-white text-[9px] md:text-[11px] font-semibold uppercase px-2.5 md:px-4 py-1.5 md:py-2 rounded-full tracking-wide shadow-sm whitespace-nowrap">
                                            {data.category}
                                        </div>

                                    </div>

                                </div>

                                {/* RIGHT SIDE IMAGE */}
                                <div className="w-[120px] sm:w-[150px] md:w-[330px] flex-shrink-0">

                                    <img
                                        src={data.pic}
                                        alt={data.title}
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                            </div>

                        </div>
                    </Link>
                ))
            }

        </div>
    );
};

export default SearchFilterResult;