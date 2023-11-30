"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { useRef } from "react"

interface CategoriesProps {
    categories: Categories[]
}

interface Categories {
    name: string,
    image: string,
    href: string
}




export default function Categories(categories: CategoriesProps) {

    const categoriesData = categories.categories

    const sliderRef = useRef<HTMLDivElement>(null)

    const [emblaRef] = useEmblaCarousel({
        align: 'center',
        slidesToScroll:1,
        loop:true
    })

    // function goToNext() {
    //     const sliderItemWidth = document.querySelector('.slider-item')?.clientWidth
    //     if (sliderRef.current !== null) {

    //         let transformWidth = sliderItemWidth? sliderItemWidth + 60 : ''
    //         console.log(transformWidth)
    //         sliderRef.current.style.cssText = `
    //             transform: translate3d(-${transformWidth}px, 0px, 0px);
    //         `
    //     }
    // }



    return (
        <div className="categories-slider">
            <div className="font-[900] text-2xl lg:text-start text-center uppercase text-white py-16">
                <h1 className="">compre por categoria</h1>
            </div>
            <div className="relative transition-all gap-10"> 
                <div ref={emblaRef} className="embla px-4 xl:px-0 container mx-auto overflow-hidden">
                    <div className="embla__container _gap-14">
                        {categoriesData.map((categorie, i) => {
                            return (
                                <div data-aos="fade-up" data-aos-delay={100 * (i + 1)} className="embla__slide overflow-hidden shrink-0 slider-item shrink-0 rounded text-center flex justify-center relative" key={i}>
                                    <img className="transition-all duration-300 grow-0 w-full hover:scale-105 hover:grayscale-[50%]" src={categorie.image} />
                                    <span className="absolute uppercase text-center text-sm text-white font-[900] bottom-5">{categorie.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}