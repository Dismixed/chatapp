import MessageSVG from '../public/messagesvg.svg'
import Image from "next/image";
import BellSVG from '../public/bell-svgrepo-com.svg'
import MagGlassSVG from '../public/magnifying-glass-svgrepo-com.svg'

export default function Home() {
  return (
      <div className={'grid grid-cols-12 grid-rows-12 h-screen w-screen bg-graybg'}>
          <div className={'col-span-full flex flex-row items-center justify-between p-3'}>
              <div className={'relative h-full w-1/12'}>
                  <Image src={MessageSVG} layout={'fill'} objectFit={'contain'}/>
              </div>
              <nav className={'h-full w-11/12 flex flex-row justify-end text-gray-700 gap-8 items-center pr-3 font-questrial'}>
                  <div className={'cursor-pointer'}>CHAT</div>
                  <div className={'cursor-pointer'}>CONTACTS</div>
                  <div className={'cursor-pointer'}>SETTINGS</div>
                  <div className={'relative h-full w-6'}>
                      <Image src={MagGlassSVG} className={'cursor-pointer'} layout={'fill'} objectFit={'contain'}/>
                  </div>
                  <div className={'relative h-full w-6'}>
                      <Image src={BellSVG} className={'cursor-pointer'} layout={'fill'} objectFit={'contain'}/>
                  </div>
              </nav>
          </div>
          <div className={'col-span-full flex flex flex-row items-center justify-between mx-8'}>
              <input className={'input w-3/12 bg-white text-black'} placeholder={'search' }/>
              <button className={'btn bg-white'}>Clear Chat</button>
          </div>

          <div className={'col-span-12 row-span-10 grid grid-cols-10 grid-rows-6'}>
              <div className={'col-start-1 col-end-4 row-span-full flex p-5'}>
                  <div className={'rounded-xl h-full w-full bg-white'}></div>
              </div>
              <div className={'col-start-4 col-end-13 row-span-full p-5'}>
                  <div className={'rounded-xl h-full w-full bg-white'}>

                  </div>
              </div>
          </div>
      </div>
  )
}
