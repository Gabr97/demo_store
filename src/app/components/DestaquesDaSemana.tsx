import ProductCard from "./ProductCard"
import useEmblaCarousel from 'embla-carousel-react'


interface DestaquesProps {
    data: Destaques[]
}


interface ImageProps {
    thumbnail: string,
    variants: string[],
    banner: string
}

interface Media {
    images: ImageProps[],
    videos: string[]
}

export interface Destaques {
    name: string,
    price: number,
    variants: string[],
    highlight: boolean,
    newRelease: boolean,
    media: Media,
    category: string[]

}
export default function DestaquesDaSemana(data: DestaquesProps) {

    const [emblaRef] = useEmblaCarousel({
        align: 'center',
    })
    const destaques = data.data


    return (
        <div className="destaques-da-semana relative">
            <div className="destaques-heading">
                <div data-aos="fade-right" className="container text-center lg:text-start mx-auto">
                    <h1>destaques da semana</h1>
                </div>
            </div>
            {/* <div className="container py-8 mx-auto">
                <div className="flex gap-10 justify-between items-base"> */}
            <div ref={emblaRef} className="embla container px-4 xl:px-0 py-8 mx-auto">
                <div className="flex embla__container gap-4 justify-between">
                    {destaques.map((destaque, i) => {
                        return (
                            <ProductCard product={destaque} key={i} index={i} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}