import Image from 'next/image'
import Offers from './components/Offers'

export default async function Home() {

  return (
    <>
      <Offers type={"Top Offers"} />
      <Offers type={"Weekly deals"} />

    </>
  )
}
