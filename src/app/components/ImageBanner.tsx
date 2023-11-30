import React from "react";

interface ImageBannerProps {
    imageBanners: ImageBannerInterface[];
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

interface ImagesObj {
    desktop: string,
    mobile: string
}

interface ImageBannerInterface {
    title: string;
    // heading: string;
    subheading: string[];
    background: Background;
    images: ImagesObj[];
    cta: string;
    timer: BannerTimer;
    size: string;
    textPosition: string,
    imagePosition: string
}

const ImageBanner: React.FC<ImageBannerProps> = ({ imageBanners }) => {

    return (
        <>
            {imageBanners.map((banner, i) => {
                return (
                    <div data-aos="zoom-in"  className={`h-full flex items-center justify-center banner-${banner.title.toLowerCase().replace(" ", '-')}`} key={i}>
                        {banner.images.map((image, i) => {
                            return <div key={i}> <img className="lg:hidden block" src={image.mobile}/> <img className="hidden lg:block" src={image.desktop} /> </div>
                        })}
                    </div>
                )

            })}
        </>
    )
}

export default ImageBanner
