// Libraries
import Head from 'next/head';

// Components
import Header from '../Components/Header';
import Navigation from '../Components/Navigation';
import axios from 'axios';
import { NavigationItems } from '../typings';
import CarouselImage from '../Components/CarouselImage';
import Chiropractic from '../Components/Chiropractic';

type Props = { navigationItems: NavigationItems[] };

export default function Home({ navigationItems }: Props) {
    // JSX
    return (
        <>
            <Head>
                <title>Ludivine Serrurier</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <section>
                    <header className='p-4 bg-[#3D9BE9]'>
                        <Header />
                    </header>
                    <section>
                        <Chiropractic />
                    </section>
                    <section>
                        <Navigation
                            navigationItems={navigationItems}
                        />
                    </section>
                </section>

                <section className='w-full'>
                    <CarouselImage />
                </section>
            </main>
        </>
    );
}

export async function getStaticProps() {
    try {
        const response = await axios.get(
            'http://localhost:3000/api/navigationItems'
        );
        const navigationItems = response.data.navigationItems;

        return {
            props: { navigationItems },
        };
    } catch (error) {
        console.log(error);

        return {
            props: { navigationItems: null },
        };
    }
}
