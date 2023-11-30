import useEmblaCarousel from 'embla-carousel-react'


interface GridItemsProps {
    numOfCols: number,
    gridName: string,
    grid: GridItems[]

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

export interface GridItems {
    name: string,
    price: number,
    variants: string[],
    highlight: boolean,
    newRelease: boolean,
    media: Media,
    category: string[]

}

const HighlisghtsGrid: React.FC<GridItemsProps> = ({ numOfCols, gridName, grid }) => {


    const [emblaRef] = useEmblaCarousel({
        align: 'center',
    })


    return (
        <div className={`container px-4 xl:px-0 mx-auto grid-${gridName.toLowerCase().replace(" ", '-')}`}>
            <div ref={emblaRef} className='embla container mx-auto'>
                <div className='embla__container justify-between gap-10'>
                    {grid.map((gridItem, i) => {
                        return (
                            <div className="embla__slide shrink-0 lg:w-auto w-full relative text-white" key={i}>
                                <div className="relative overflow-hidden flex justify-end flex-col items-end grid-item" >
                                    <img className="hover:scale-105 transition-all" src={gridItem.media.images[0].banner} />
                                    <div className="absolute w-full bg-[#4A5CFA] flex items-center justify-between">
                                        <button className="uppercase main-yellow-text font-[900] p-4 bg-zinc-800/40">comprar</button>
                                        <div className="flex items-center px-4">{gridItem.variants.length > 0 && gridItem.variants.map((variant, i) => {
                                            return <small key={i}>{variant}</small>
                                        })} </div>
                                    </div>
                                </div>
                                <div className="text-sm py-4 text-end">por {gridItem.price.toLocaleString('PT-BR', { style: 'currency', currency: 'BRL' })}</div>
                            </div>
                        )
                    })}
                </div>

            </div>
            {/* <div className={`grid gap-10 grid-cols-${numOfCols}`}>
                {grid.map((gridItem, i) => {
                    return (
                        <div className="relative text-white" key={i}>
                            <div className="relative overflow-hidden flex justify-end flex-col items-end grid-item" >
                                <img className="hover:scale-105 transition-all" src={gridItem.media.images[0].banner} />
                                <div className="absolute w-full bg-[#4A5CFA] flex items-center justify-between">
                                    <button className="uppercase main-yellow-text font-[900] p-4 bg-zinc-800/40">comprar</button>
                                    <div className="flex items-center px-4">{gridItem.variants.length > 0 && gridItem.variants.map((variant, i) => {
                                        return <small key={i}>{variant}</small>
                                    })} </div>
                                </div>
                            </div>
                            <div className="text-sm py-4 text-end">por {gridItem.price.toLocaleString('PT-BR', { style: 'currency', currency: 'BRL' })}</div>
                        </div>
                    )
                })}

            </div> */}
        </div>
    )
}

export default HighlisghtsGrid