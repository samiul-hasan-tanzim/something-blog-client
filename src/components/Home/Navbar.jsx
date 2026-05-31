import Link from "next/link";
import SearchFunction from "./SearchFunction";

const Navbar = () => {
    const adminUser = false

    return (
        <div className="bg-[#13253d] border-b border-[#1f3653] shadow-lg">

            <div className="w-full md:w-[95%] xl:w-[90%] mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-3">

                    {/* Site Name */}
                    <h2 className="text-white text-[16px] sm:text-[18px] md:text-[32px] font-black uppercase tracking-wide leading-none">
                        GLOBAL ARCHIVES
                    </h2>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-3">

                    {/* Search */}
                    <SearchFunction />

                    {/* Admin Dashboard */}
                    {
                        adminUser && (
                            <Link href={'/dashboard'}>
                                <button className="bg-[#d6a247] hover:bg-[#c89439] transition-all duration-300 text-black font-bold px-5 py-2 rounded-xl shadow-md text-sm">
                                    Dashboard
                                </button>
                            </Link>
                        )
                    }

                </div>

            </div>
        </div>
    );
};

export default Navbar;