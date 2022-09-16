import type { NextPage } from 'next';
import { Box, Header, ImageWrapped, TitleDescImg, ItemBox } from 'Components';
import Layer1 from 'Components/Page/Layer1';
import { createRef, useRef } from 'react';
import Head from 'next/head';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import woman from 'public/womanbag.jpg';
import blwoman from 'public/blwhitewoman.jpeg';
import prod1 from 'public/prod1.jpg';
import prod2 from 'public/prod2.jpg';
import prod3 from 'public/prod3.jpg';
import prod4 from 'public/prod4.jpg';
// import { createClient } from 'next-sanity';

// const client = createClient({
//     projectId: '3zonnd0w',
//     dataset: 'production',
//     apiVersion: '2022-08-28',
//     useCdn: false,
// });

const imgPropsObj = {
    layout: 'responsive',
    objectFit: 'cover',
    objectPosition: 'top',
};

const Home: NextPage = () => {
    return (
        <Box>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layer1 />
            <Box className="bg-pagWhite pt-20 px-3">
                <Box className="pt-20">
                    <Header>
                        <h2 className="layer2TopHeader">Makeup</h2>
                        <h2 className="layer2TopHeader">Artist</h2>
                        <h2 className="layer2TopHeader">Services</h2>
                        <p className="text-layer1Grey pt-8">
                            Canadian model Coco Rocha is featured on the cover. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit nullam nunc justo sagittis suscipit ultrices. Maecenas convallis purus vel
                            velit semper vehicula. Etiam consectetur aliquet lacus, nec efficitur diam consectetur nec.
                        </p>
                    </Header>
                    <Box>
                        <TitleDescImg
                            headerProps={{
                                restH2: { className: 'text-[2.25rem] text-layer1Grey pt-10' },
                                restP: { className: 'text-layer1Grey pt-8' },
                                title: 'About Us',
                                description: `Canadian model Coco Rocha is featured on the cover. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit nullam nunc justo sagittis suscipit ultrices. Maecenas convallis purus vel velit
                            semper vehicula. Etiam consectetur aliquet lacus, nec efficitur diam consectetur nec.`,
                            }}
                            boxOuterProps={{ className: 'pt-10' }}
                            boxInnerProps={{ className: 'pr-8 w-[400px]' }}
                            imageWrapperProps={{ className: 'relative' }}
                            imgProps={{
                                src: blwoman,
                                layout: 'responsive',
                                objectFit: 'cover',
                                objectPosition: 'top',
                                alt: 'blwoman',
                            }}
                        />
                    </Box>
                </Box>
                <ItemBox
                    className="overflow-y-hidden py-10 relative"
                    imgWrapperProps={{ className: 'relative' }}
                    imgProps={{
                        src: woman,
                        layout: 'responsive',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        alt: 'woman',
                    }}
                    boxOutterProps={{
                        className: 'w-fit bg-pageWhite absolute py-6 px-4 bottom-2 drop-shadow-xl right-4',
                    }}
                    pProps={{
                        className: 'text-[3.75rem] text-layer1Grey',
                    }}
                    spanProps={{
                        className: 'font-thin',
                    }}
                    spanContent="#"
                    pContent="trends"
                />
                {/* <Box className="relative">
                    <ImageWrapped
                        className="relative"
                        imgProps={{
                            src: woman,
                            layout: 'responsive',
                            objectFit: 'cover',
                            objectPosition: 'top',
                            alt: 'woman',
                        }}
                    />
                    <Box className="w-fit bg-pageWhite absolute py-6 px-4 bottom-2 drop-shadow-xl right-4">
                        <p className="text-[3.75rem] text-layer1Grey">
                            <span className="font-thin">#</span>trends
                        </p>
                    </Box>
                </Box> */}
                <Box className="grid gap-4">
                    <Box className="pb-10 relative">
                        <ImageWrapped
                            className="relative overflow-hidden h-[400px]"
                            imgProps={{
                                src: prod1,
                                layout: 'fill',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                alt: 'prod1',
                            }}
                        />
                        <Box className="w-fit bg-pageWhite backdrop-blur-sm absolute py-6 px-4 bottom-2 drop-shadow-xl right-4">
                            <p className="text-[3.75rem] text-layer1Grey">
                                <span className="font-thin">$</span>250
                            </p>
                        </Box>
                    </Box>
                    <Box className="pb-10 relative">
                        <ImageWrapped
                            className="relative overflow-hidden h-[400px]"
                            imgProps={{
                                src: prod2,
                                layout: 'fill',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                alt: 'prod2',
                            }}
                        />
                        <Box className="w-fit bg-pageWhite backdrop-blur-sm absolute py-6 px-4 bottom-2 drop-shadow-xl right-4">
                            <p className="text-[3.75rem] text-layer1Grey">
                                <span className="font-thin">$</span>250
                            </p>
                        </Box>
                    </Box>
                    <Box className="pb-10 relative">
                        <ImageWrapped
                            className="relative overflow-hidden h-[400px]"
                            imgProps={{
                                src: prod3,
                                layout: 'fill',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                alt: 'prod3',
                            }}
                        />
                        <Box className="w-fit bg-pageWhite backdrop-blur-sm absolute py-6 px-4 bottom-2 drop-shadow-xl right-4">
                            <p className="text-[3.75rem] text-layer1Grey">
                                <span className="font-thin">$</span>250
                            </p>
                        </Box>
                    </Box>
                    <Box className="pb-10 relative">
                        <ImageWrapped
                            className="relative overflow-hidden h-[400px]"
                            imgProps={{
                                src: prod4,
                                layout: 'fill',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                alt: 'prod4',
                            }}
                        />
                        <Box className="w-fit bg-pageWhite backdrop-blur-sm absolute py-6 px-4 bottom-2 drop-shadow-xl right-4">
                            <p className="text-[3.75rem] text-layer1Grey">
                                <span className="font-thin">$</span>250
                            </p>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;

// export async function getStaticProps() {
//     const article = await client.fetch(`*[_type == "article"]`);
//     console.log(article, 'data');
//     return {
//         props: { article },
//     };
// }
