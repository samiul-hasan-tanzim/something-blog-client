import FilterButtons from "./FilterButtons";
import SearchFilterResult from "./Search&FilterResult";

const HomePageMainWindow = async ({ allData, searchParams }) => {

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-12">

                {/* LEFT AD */}
                <div className="hidden md:block md:col-span-2">
                    {/* Ad Section */}
                </div>

                {/* FILTER */}
                <div className="md:col-span-2 sticky top-0 md:top-5 z-30 bg-white h-fit p-3">
                    <FilterButtons />
                </div>

                {/* POSTS */}
                <div className="md:col-span-6 p-3">
                    {
                        allData.length > 0
                            ? <SearchFilterResult allData={allData} />
                            : 'No search result was found! please change the filter or do another search'
                    }
                </div>

                {/* RIGHT AD */}
                <div className="hidden md:block md:col-span-2">
                    {/* Ad section */}
                </div>

            </div>

        </div>
    );
};

export default HomePageMainWindow;