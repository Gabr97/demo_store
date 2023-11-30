"use client"
import Countdown from "./Countdown";

interface BannersProps {
    banners: BannerContent[];
}
interface BannerTimer {
    title: string;
    available: boolean;
    time: string;
}

interface Background {
    color: string;
    image: string;
    mobileImage: string;
}

interface BannerContent {
    title: string;
    heading: string;
    subheading: string[];
    background: Background;
    images: string[];
    cta: string;
    timer: BannerTimer;
    size: string;
    textPosition: string,
    imagePosition: string
}

const Banners: React.FC<BannersProps> = ({ banners }) => {


    return (
        <div className="banners-section h-full">
            {banners.map((banner, i) => {
                const bannerDate = new Date(banner.timer.time)
                const backgroundStyle = {
                    background: banner.background.color ? banner.background.color : '',
                    backgroundImage: banner.background.image ? `url(${banner.background.image})` : 'none',
                    backgroundSize: banner.background.image ? 'cover' : '',
                    height: '100%'
                }
                const backgroundMobileStyle = {
                    background: banner.background.color ? banner.background.color : '',
                    backgroundImage: banner.background.mobileImage ? `url(${banner.background.mobileImage})` : 'none',
                    backgroundSize: banner.background.mobileImage ? 'cover' : '',
                    height: '100%'
                }

                return (
                    <div className='h-full animate__animated animate__fadeIn' key={i}>
                        <img className="lg:block hidden object-cover w-full h-full" src={banner.background.image}/>
                        <img className="block lg:hidden object-cover w-full h-full" src={banner.background.mobileImage}/>
                        {/* <div className={`h-full lg:hidden block banner-${banner.title.toLowerCase().replace(" ", '-')}`} >
                            <div style={backgroundMobileStyle}>
                                <div className="h-full relative container mx-auto grid items-center  grid-cols-2">
                                    <div>
                                        {banner.images.length ? <img /> : ''}
                                    </div>
                                    <div className="flex relative banner-text-section flex-col">
                                        <div className="relative flex flex-col">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`h-full lg:block hidden banner-${banner.title.toLowerCase().replace(" ", '-')}`} key={i + 1}>
                            <div style={backgroundStyle}>
                                <div className="h-full relative container mx-auto grid items-center  grid-cols-2">
                                    <div>
                                        {banner.images.length ? <img /> : ''}
                                    </div>
                                    <div className="flex relative banner-text-section flex-col">
                                        <div className="relative flex flex-col">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                )
            })}
        </div>
    )
}

export default Banners