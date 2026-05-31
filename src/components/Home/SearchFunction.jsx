'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const SearchFunction = () => {

    const [search, setSearch] = useState()
    const [mobileSearch, setMobileSearch] = useState(false)

    const router = useRouter()
    const searchQuery = useSearchParams()

    const handelSearch = () => {

        const params = new URLSearchParams(searchQuery?.toString() || '')

        if (search) {
            params.set("search", search)
        } else {
            params.delete("search")
        }

        router.push(`/?${params.toString()}`)
    }

    return (
        <div className="w-full">

            {/* DESKTOP SEARCH */}
            <div className="hidden md:flex relative items-center">

                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    name="search"
                    placeholder="SEARCH..."
                    className="w-[210px] lg:w-[270px] h-[46px] bg-white rounded-xl border border-[#d9d9d9] text-[#555] text-[15px] font-medium outline-none pl-5 pr-16 shadow-sm placeholder:text-[#7c7c7c] placeholder:uppercase"
                />

                {
                    search && (
                        <FaX
                            onClick={() => setSearch('')}
                            className="absolute right-12 text-[#777] text-[13px] cursor-pointer hover:text-black transition-all duration-200"
                        />
                    )
                }

                <div
                    onClick={handelSearch}
                    className="absolute right-4 cursor-pointer"
                >
                    <button
                        type="submit"
                        className="text-[#222] hover:scale-110 transition-all duration-200"
                    >
                        <FiSearch className="text-[22px]" />
                    </button>
                </div>

            </div>

            {/* MOBILE SEARCH */}
            <div className="md:hidden">

                {
                    !mobileSearch && (
                        <button
                            onClick={() => setMobileSearch(true)}
                            className="text-white"
                        >
                            <FiSearch className="text-[26px]" />
                        </button>
                    )
                }

                {
                    mobileSearch && (
                        <div className="fixed top-0 left-0 w-full bg-[#13253d] p-3 z-[999] flex items-center gap-3 shadow-2xl">

                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="text"
                                placeholder="SEARCH..."
                                className="flex-1 h-[44px] rounded-xl px-4 outline-none text-black bg-white text-sm"
                            />

                            <button
                                onClick={handelSearch}
                                className="text-white"
                            >
                                <FiSearch className="text-[24px]" />
                            </button>

                            <button
                                onClick={() => setMobileSearch(false)}
                                className="text-white"
                            >
                                <FaX className="text-[20px]" />
                            </button>

                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default SearchFunction;