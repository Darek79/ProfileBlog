import { Box, Header, TitleDescImg, ItemBox } from 'Components';
import woman from 'public/womanbag.jpg';
import blwoman from 'public/blwhitewoman.jpeg';
import prod1 from 'public/prod1.jpg';
import prod2 from 'public/prod2.jpg';
import prod3 from 'public/prod3.jpg';
import prod4 from 'public/prod4.jpg';

export default function Layer2(): JSX.Element {
    return (
        <Box className="bg-pageWhite w-full flex justify-center">
            <Box className="maxWidthPage pt-20 px-3 sm:px-10 sm:pt-10">
                <Box className="sm:flex">
                    <Header
                        className="m-auto basis-1/2"
                        restH2={{ className: 'layer2TopHeader w-1/3' }}
                        restP={{ className: 'text-layer1Grey pt-8 sm:w-3/4' }}
                        title="Makeup Artist Services"
                        description={`Adipiscing elit nullam nunc justo sagittis suscipit ultrices. Maecenas convallis purus vel velit
                    semper vehicula. Etiam consectetur aliquet lacus, nec efficitur diam consectetur nec.`}
                    />
                    <Box className="basis-1/2 flex items-center">
                        <TitleDescImg
                            className="pt-10 sm:pt-5"
                            headerProps={{
                                restH2: { className: 'text-[2.25rem] font-Rozha text-layer1Grey' },
                                restP: { className: 'text-layer1Grey sm:w-3/4 pt-8' },
                                title: 'About Us',
                                description: `Canadian model Coco Rocha is featured on the cover. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit nullam nunc justo sagittis suscipit ultrices. Maecenas convallis purus vel velit
                semper vehicula. Etiam consectetur aliquet lacus, nec efficitur diam consectetur nec.`,
                            }}
                            boxOuterProps={{ className: 'pt-10 max-w-[25rem] h-[25rem] sm:h-[28.125rem]' }}
                            boxInnerProps={{ className: 'pr-8 sm:pr-0 w-full h-full' }}
                            imageWrapperProps={{ className: 'relative w-full h-full drop-shadow-lg' }}
                            imgProps={{
                                src: blwoman,
                                layout: 'fill',
                                objectFit: 'cover',
                                objectPosition: 'top',
                                alt: 'blwoman',
                            }}
                        />
                    </Box>
                </Box>
                <Box className="">
                    <Box className="xs:flex xs:justify-center">
                        <ItemBox
                            className="py-10 relative drop-shadow-lg w-[360px] h-[600px] sm:w-[31.25rem] sm:h-[46.875rem]"
                            imgWrapperProps={{ className: 'relative h-full w-full ' }}
                            imgProps={{
                                src: woman,
                                layout: 'fill',
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
                    </Box>
                    <Box className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2">
                        <ItemBox
                            className="pb-10 relative drop-shadow-lg"
                            imgWrapperProps={{ className: 'relative overflow-hidden w-full h-[400px]' }}
                            imgProps={{
                                src: prod1,
                                layout: 'fill',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                alt: 'prod1',
                            }}
                            boxOutterProps={{
                                className:
                                    'w-fit bg-pageWhite backdrop-blur-sm absolute py-6 px-4 bottom-2 drop-shadow-xl right-4',
                            }}
                            pProps={{ className: 'text-[3.75rem] text-layer1Grey' }}
                            spanProps={{ className: 'font-thin' }}
                            spanContent="$"
                            pContent={250}
                        />

                        <ItemBox
                            className="pb-10 relative drop-shadow-lg"
                            imgWrapperProps={{ className: 'relative overflow-hidden w-full h-[400px]' }}
                            imgProps={{
                                src: prod2,
                                layout: 'fill',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                alt: 'prod1',
                            }}
                            boxOutterProps={{
                                className:
                                    'w-fit bg-pageWhite backdrop-blur-sm absolute py-6 px-4 bottom-2 drop-shadow-xl right-4',
                            }}
                            pProps={{ className: 'text-[3.75rem] text-layer1Grey' }}
                            spanProps={{ className: 'font-thin' }}
                            spanContent="$"
                            pContent={250}
                        />
                        <ItemBox
                            className="pb-10 w-full relative drop-shadow-lg"
                            imgWrapperProps={{ className: 'relative overflow-hidden w-full h-[400px]' }}
                            imgProps={{
                                src: prod3,
                                layout: 'fill',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                alt: 'prod1',
                            }}
                            boxOutterProps={{
                                className:
                                    'w-fit bg-pageWhite backdrop-blur-sm absolute py-6 px-4 bottom-2 drop-shadow-xl right-4',
                            }}
                            pProps={{ className: 'text-[3.75rem] text-layer1Grey' }}
                            spanProps={{ className: 'font-thin' }}
                            spanContent="$"
                            pContent={250}
                        />
                        <ItemBox
                            className="pb-10 relative w-full drop-shadow-lg"
                            imgWrapperProps={{ className: 'relative overflow-hidden w-full h-[400px]' }}
                            imgProps={{
                                src: prod4,
                                layout: 'fill',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                alt: 'prod1',
                            }}
                            boxOutterProps={{
                                className:
                                    'w-fit bg-pageWhite backdrop-blur-sm absolute py-6 px-4 bottom-2 drop-shadow-xl right-4',
                            }}
                            pProps={{ className: 'text-[3.75rem] text-layer1Grey' }}
                            spanProps={{ className: 'font-thin' }}
                            spanContent="$"
                            pContent={250}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
