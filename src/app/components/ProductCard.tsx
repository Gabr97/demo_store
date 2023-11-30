interface Product {
    // Define the structure of your product object
    name: string;
    price: number;
    media: {
      images: {
        thumbnail: string;
      }[];
    };
    // Add other properties as needed
  }
  
  interface ProductCardProps {
    product: Product;
    index: number;
  }

  export default function ProductCard({ product, index }: ProductCardProps) {
 
    return (
        <div data-aos="fade-up" data-aos-delay={100 * (index + 1)} key={index}  className="product-card shrink-0 w-[196px] lg:w-[300px] flex flex-col embla__slide">
            <div className="thumbnail-wrapper transition-all duration-200 hover:scale-105 shadow-md">
                <img className='' src={product.media.images[0].thumbnail} />
            </div>
            <div className="flex pt-4 gap-8 flex-col">
                <div>
                    <span className="text-white text-sm">{product.name}</span>
                </div>
                <span className="main-yellow-text"> {product.price.toLocaleString('PT-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
        </div>
    )
}