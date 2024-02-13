import Image from "next/image";
import Events from '@/components/events/Events'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
// import Animation from '../components/Animation'
import Prateesh from '../components/Prateesh'
import Ranjan from '../components/Ranjan'
import Vishrant from '../components/Vishrant'

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Events /> */}
      <Vishrant />
      <Prateesh />
      <Ranjan />
      <Newsletter />
      {/* <Animation /> */}
      {/**height of the whole page can be maintained here */}
      <div className='h-[0px]'></div>
    </main>
  );
}
