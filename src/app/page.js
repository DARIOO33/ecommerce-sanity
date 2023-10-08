import Image from 'next/image'
import Offers from './components/Offers'
import FeaturedBrands from './components/FeaturedBrands'
import { Suspense } from 'react'
import BrowseCategories from './components/BrowseCategories'


export default async function Home() {

  return (
    <div >

      <div key={Math.random()} className="SearchResults">
        <Offers type={"Top Offers"} />
        <FeaturedBrands />
        <Offers type={"Weekly deals"} />
        <BrowseCategories />
        <Offers type={"Feautured Products"} />

      </div>
    </div>
  )
}
