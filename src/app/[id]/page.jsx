import DetailsPageMainWindow from "@/components/Details/DetailsPageMainWindow";
import Navbar from "@/components/Home/Navbar";
import { getPostById } from "@/lib/data/data";

const DetailesPage = async ({ params }) => {

    const { id } = await params
    const postDetailes = await getPostById(id)

    return (
        <div>
            <Navbar />
            <DetailsPageMainWindow postDetailes={postDetailes} />
        </div>
    );
};

export default DetailesPage;