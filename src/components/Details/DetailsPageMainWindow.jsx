import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

const DetailsPageMainWindow = ({ postDetailes }) => {
    // console.log(postDetailes)
    return (
        <div className='grid grid-cols-1 md:grid-cols-12'>
            <div className='md:col-span-2 hidden md:block bg-[#eef2f7]'>
                {/* Ad Section */}
            </div>
            <div className='md:col-span-5'>
                <FirstSection postDetailes={postDetailes} />
            </div>
            <div className='md:col-span-3'>
                <SecondSection postDetailes={postDetailes} />
            </div>
            <div className='md:col-span-2 hidden md:block bg-[#eef2f7]'>
                {/* Ad Section */}
            </div>
        </div>
    );
};

export default DetailsPageMainWindow;