import ProductCard from "./ProductCard"
import useEmblaCarousel from 'embla-carousel-react'



interface CatalogProps {
    catalogName: string,
    catalogProducts: CatalogProducts[]
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

interface CatalogProducts {
    name: string,
    price: number,
    variants: string[],
    highlight: boolean,
    newRelease: boolean,
    media: Media,
    category: string[]
}


const Catalog: React.FC<CatalogProps> = ({ catalogName, catalogProducts }) => {
    const [emblaRef] = useEmblaCarousel({
        align: 'center',
    })

    return (
        <div className={`${catalogName.toLowerCase().replace(' ', '-')}-catalog`}>
            <div data-aos="fade-right" className="font-[900] text-2xl lg:text-start text-center uppercase text-white py-16">
                <h1 className="">{catalogName}</h1>
            </div>
            <div ref={emblaRef} className="embla _overflow-hidden">
                <div className="flex embla__container gap-4 justify-between">
                    {catalogProducts.slice(0, 5).map((product, i) => {
                        return <ProductCard key={i} product={product} index={i}  />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Catalog