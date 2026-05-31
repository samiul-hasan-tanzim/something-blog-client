'use client'
import { allData } from "@/lib/data/data";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";

const FilterButtons = () => {

    const [types, setTypes] = useState([]);

    useEffect(() => {
        const getTypes = async () => {
            const data = await allData();
            const allCategories = data.map(item => item.category);
            const uniqueCategories = [...new Set(allCategories)];
            setTypes(uniqueCategories);
        };
        getTypes();
    }, []);

    const router = useRouter()
    const searchParams = useSearchParams()

    const activeType = searchParams.get("type") || ""

    const handleFilter = (value) => {

        const params = new URLSearchParams(searchParams.toString())

        if (value) {
            params.set("type", value)
        } else {
            params.delete("type")
        }

        router.push(`/?${params.toString()}`)
    };

    return (
        <div className="w-full">

            {/* TITLE */}
            <h2 className="hidden md:block text-[#13253d] text-[26px] font-black uppercase mb-5 tracking-tight">
                FORUM
            </h2>

            {/* MOBILE */}
            <div className="md:hidden flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">

                {/* ALL */}
                <button
                    onClick={() => router.push('/')}
                    className={`min-w-fit h-[52px] rounded-xl flex items-center gap-2 px-4 transition-all duration-300 border shadow-sm
                        
                        ${!activeType
                            ? "bg-[#13253d] text-white border-[#13253d]"
                            : "bg-[#7d8796] text-white border-[#7d8796]"
                        }
                    `}
                >

                    <HiOutlineGlobeAsiaAustralia className="text-[20px]" />

                    <span className="text-[14px] font-semibold uppercase tracking-wide whitespace-nowrap">
                        All
                    </span>

                </button>
                {
                    types.map((type, i) => (
                        <button
                            key={i}
                            onClick={() => handleFilter(type)}
                            className={`w-full h-[52px] rounded-2xl flex items-center gap-4 px-5 transition-all duration-300 shadow-md border
        ${activeType === type
                                    ? "bg-[#13253d] text-white border-[#13253d]"
                                    : "bg-gradient-to-br from-[#7f8b9d] to-[#596577] text-white border-[#718096]"
                                }
      `}
                        >
                            <span className="text-[14px] font-semibold uppercase tracking-wide">
                                {type}
                            </span>
                        </button>
                    ))
                }

            </div>

            {/* DESKTOP */}
            <div className="hidden md:flex flex-col gap-4">

                {/* ALL */}
                <button
                    onClick={() => router.push('/')}
                    className={`w-full h-[62px] rounded-2xl flex items-center gap-4 px-5 text-left transition-all duration-300 shadow-md border
                        
                        ${!activeType
                            ? "bg-[#13253d] text-white border-[#13253d]"
                            : "bg-gradient-to-br from-[#7f8b9d] to-[#596577] text-white border-[#718096]"
                        }
                    `}
                >

                    <HiOutlineGlobeAsiaAustralia className="text-[28px]" />

                    <span className="text-[17px] font-semibold uppercase tracking-wide">
                        All
                    </span>

                </button>

                {
                    types.map((type, i) => (
                        <button
                            key={i}
                            onClick={() => handleFilter(type)}
                            className={`w-full h-[62px] rounded-2xl flex items-center gap-4 px-5 transition-all duration-300 shadow-md border
        ${activeType === type
                                    ? "bg-[#13253d] text-white border-[#13253d]"
                                    : "bg-gradient-to-br from-[#7f8b9d] to-[#596577] text-white border-[#718096]"
                                }
      `}
                        >
                            <span className="text-[17px] font-semibold uppercase tracking-wide">
                                {type}
                            </span>
                        </button>
                    ))
                }

            </div>

        </div>
    );
};

export default FilterButtons;