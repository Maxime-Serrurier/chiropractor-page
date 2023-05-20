import { Carousel } from '@material-tailwind/react';

export default function CarouselImage() {
    return (
        <Carousel
            autoplay
            loop
            transition={{ duration: 1.5 }}
            className='h-[500px]'
        >
            <img
                src='./assets/colonne-vertebrale.jpg'
                alt='image 1'
                className='h-full w-full object-cover'
            />
            <img
                src='./assets/chiropraxie.jpg'
                alt='image 2'
                className='h-full w-full object-cover'
            />
            <img
                src='./assets/jeune-femme.jpg'
                alt='image 3'
                className='h-full w-full object-cover'
            />
            <img
                src='./assets/patient-traitement.jpg'
                alt='image 3'
                className='h-full w-full object-cover'
            />
        </Carousel>
    );
}
