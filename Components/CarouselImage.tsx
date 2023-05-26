import { Carousel } from '@material-tailwind/react';
import Image from 'next/image';
import Chiropractic from './Chiropractic';

export default function CarouselImage() {
  return (
    <>
      <div className='relative flex items-center justify-center'>
        <Carousel
          autoplay
          loop
          transition={{ duration: 1 }}
          className='md:h-[500px]  z-0'
        >
          <Image
            src='/assets/colonne-vertebrale.jpg'
            alt='image 1'
            className='object-cover w-full h-full'
            width={1000}
            height={300}
            quality={100}
          />
          <Image
            src='/assets/chiropraxie.jpg'
            alt='image 2'
            className='object-cover w-full h-full'
            width={1000}
            height={300}
            quality={100}
          />
          <Image
            src='/assets/jeune-femme.jpg'
            alt='image 3'
            className='object-cover w-full h-full'
            width={1000}
            height={300}
            quality={100}
          />
          <Image
            src='/assets/patient-traitement.jpg'
            alt='image 3'
            className='object-cover w-full h-full'
            width={1000}
            height={300}
            quality={100}
          />
        </Carousel>
        <Chiropractic />
      </div>
    </>
  );
}
