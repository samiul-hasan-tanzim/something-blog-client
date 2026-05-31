import { newPost } from "@/lib/data/data";
import toast from "react-hot-toast";


const NewBlog = ({ user, setActiveTab }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());

        const modifiedData = {
            title: userData.title,
            description: userData.description,
            author: user?.name,
            authorEmail: user?.email,
            date: userData.date,
            category: userData.category,
            pic: userData.pic,
            vid: userData.vid,
            duration: userData.duration,
            like: 0,
            comments: [],
            view: 0,
        }
        const res = await newPost(modifiedData)
        if (res.acknowledged) {
            toast.success("Post Added!")
            setActiveTab("analytics");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-white border border-[#d8dee7] rounded-3xl shadow-sm p-5 md:p-8"
        >

            {/* TITLE */}
            <h2 className="text-[30px] font-black text-[#13253d] mb-8">
                Create New Post
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* TITLE */}
                <div className="md:col-span-2">

                    <label
                        htmlFor="title"
                        className="block text-[#13253d] font-semibold mb-2"
                    >
                        Title
                    </label>

                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        placeholder="Enter post title"
                        className="w-full h-12 px-4 rounded-xl border border-[#d8dee7] outline-none focus:border-[#13253d]"
                    />

                </div>

                {/* DESCRIPTION */}
                <div className="md:col-span-2">

                    <label
                        htmlFor="description"
                        className="block text-[#13253d] font-semibold mb-2"
                    >
                        Description
                    </label>

                    <textarea
                        id="description"
                        name="description"
                        required
                        rows={6}
                        placeholder="Write your post description..."
                        className="w-full p-4 rounded-xl border border-[#d8dee7] outline-none resize-none focus:border-[#13253d]"
                    />

                </div>

                {/* DATE */}
                <div>

                    <label
                        htmlFor="date"
                        className="block text-[#13253d] font-semibold mb-2"
                    >
                        Date
                    </label>

                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        className="w-full h-12 px-4 rounded-xl border border-[#d8dee7] outline-none focus:border-[#13253d]"
                    />

                </div>

                {/* CATEGORY */}
                <div>

                    <label
                        htmlFor="category"
                        className="block text-[#13253d] font-semibold mb-2"
                    >
                        Category
                    </label>

                    <input
                        type="text"
                        id="category"
                        name="category"
                        required
                        placeholder="Technology / Travel / Food"
                        className="w-full h-12 px-4 rounded-xl border border-[#d8dee7] outline-none focus:border-[#13253d]"
                    />

                </div>

                {/* PICTURE URL */}
                <div>

                    <label
                        htmlFor="pic"
                        className="block text-[#13253d] font-semibold mb-2"
                    >
                        Picture URL
                    </label>

                    <input
                        type="url"
                        id="pic"
                        name="pic"
                        placeholder="https://..."
                        className="w-full h-12 px-4 rounded-xl border border-[#d8dee7] outline-none focus:border-[#13253d]"
                    />

                </div>

                {/* VIDEO URL */}
                <div>

                    <label
                        htmlFor="vid"
                        className="block text-[#13253d] font-semibold mb-2"
                    >
                        Video URL
                    </label>

                    <input
                        type="url"
                        id="vid"
                        name="vid"
                        placeholder="https://..."
                        className="w-full h-12 px-4 rounded-xl border border-[#d8dee7] outline-none focus:border-[#13253d]"
                    />

                </div>

                {/* DURATION */}
                <div className="md:col-span-2">

                    <label
                        htmlFor="duration"
                        className="block text-[#13253d] font-semibold mb-2"
                    >
                        Video Duration
                    </label>

                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        placeholder="e.g. 10:24"
                        className="w-full h-12 px-4 rounded-xl border border-[#d8dee7] outline-none focus:border-[#13253d]"
                    />

                </div>

            </div>

            {/* BUTTON */}
            <div className="mt-8 flex justify-end">

                <button
                    type="submit"
                    className="bg-[#13253d] hover:bg-[#1a3150] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300"
                >
                    Publish Post
                </button>

            </div>

        </form>
    );
};

export default NewBlog;