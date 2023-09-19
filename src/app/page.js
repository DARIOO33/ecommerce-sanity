import Image from 'next/image'
import Offers from './components/Offers'
import FeaturedBrands from './components/FeaturedBrands'

export default async function Home() {

  return (
    <>
      <Offers type={"Top Offers"} />
      <FeaturedBrands />
      <Offers type={"Weekly deals"} />

    </>
  )
}
