import Image from 'next/image'
import Offers from './components/Offers'
import FeaturedBrands from './components/FeaturedBrands'
import { Suspense } from 'react'
import BrowseCategories from './components/BrowseCategories'


export default async function Home() {

  return (
    <div >

      <Offers type={"Top Offers"} />
      <FeaturedBrands />
      <Offers type={"Weekly deals"} />
      <BrowseCategories />

    </div>
  )
}
