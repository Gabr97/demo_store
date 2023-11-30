"use client"
import 'animate.css';
import Banners from "./components/Banners";
import data from '../app/content.json'
import HighlisghtsGrid from "./components/HighlightsGrid";
import DestaquesDaSemana from "./components/DestaquesDaSemana";
import ImageBanner from "./components/ImageBanner";
import Catalog from "./components/Catalog";
import Newsletter from "./components/Newsletter";
import Categories from "./components/Categories";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {

  const products = data.products
  const categories = data.categories

  const { topBanners, middleBanners, bottomBanners } = data.banners

  const upperGrid = products.filter((product) => product.highlight)
  const destaques = products.filter((product) => product.newRelease)

  const highlightGrid = {
    numOfCols: 3,
    grid: upperGrid,
    gridName: 'Highlights'
  }


  useEffect(() => {
    AOS.init()

  }, [])

  return (
    <main className="overflow-x-hidden">
      <div className="top-banner-section">
        <Banners banners={topBanners} />
      </div>
      <HighlisghtsGrid  {...highlightGrid} />
      <DestaquesDaSemana data={destaques} />
      <div className="container xl:px-0 px-4 mx-auto">
        <ImageBanner imageBanners={middleBanners} />
      </div>
      {/* category */}
      <div className="relative">
        <img className="absolute -left-48" src='/categories_side_element.png' />
        <img className="absolute -right-64 top-24" src="/polygon.png" />
        <div className="container mx-auto">
          <Categories categories={categories} />
        </div>
      </div>
      <div className="container px-4 xl:px-0 mx-auto">
        <Catalog catalogName='Mais vendidos' catalogProducts={products} />
        <Catalog catalogName='Melhores Avaliações' catalogProducts={products} />
      </div>
      <Newsletter />
    </main>
  )
}
