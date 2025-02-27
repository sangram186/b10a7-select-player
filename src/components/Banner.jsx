import banner from '../assets/images/bg-shadow.png'
import bannerMain from '../assets/images/banner-main.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className="h-[545px] bg-cover bg-no-repeat bg-black rounded-2xl">
            <div className='w-3/5 h-full  m-auto text-center space-y-4 md:space-y-8 flex-col content-center'>
                    <img className='mx-auto' src={bannerMain} alt="" />
                    <h1 className='text-white text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <h3 className='text-gray-200 text-xl font-semibold'>Beyond Boundaries Beyond Limits</h3>
                    {/* <span className='bg-[#E7FE29] hover:bg-gray-100  py-5 px-1 rounded-lg '>
                        
                    </span>
                    <button className='font-bold bg-[#E7FE29] py-2 px-3 rounded-lg border-8 border-orange-500 cursor-pointer'>
                            Claim Free Credit
                        </button> */}
                        {/* border-8 border-[#131313] */}
                    <div className='bg-[#E7FE29] inline-block p-[1px] rounded-2xl cursor-pointer'>
                        <div className='bg-black rounded-2xl p-2'>
                            <button className='bg-[#E7FE29] p-2 rounded-xl font-bold cursor-pointer'>Claim Free Credit</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Banner;