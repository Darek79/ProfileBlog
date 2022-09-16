import { Box, Header, ImageWrapped, HamburgerSVG } from 'Components';

export default function Layer1(): JSX.Element {
    return (
        <Box className="bg-layer1Grey py-10 px-3">
            <Box className="flex">
                <HamburgerSVG className="w-[40px] m-auto" />
            </Box>
            <Box className="relative w-full">
                <Header
                    className="w-full h-[6.25rem] sm:h-[8.125rem]"
                    restH2={{
                        className: 'font-Rozha text-[6rem] sm:text-[8rem] text-layer1GreyTint leading-snug text-center',
                    }}
                    title="fashion"
                />
                <Box className="flex w-full flex-col h-[1200px] ">
                    <ImageWrapped
                        className="relative h-full"
                        imgProps={{
                            src: '/top1.jpeg',
                            alt: 'top1_image',
                            layout: 'fill',
                            objectFit: 'cover',
                            objectPosition: 'top',
                        }}
                    />
                    <ImageWrapped
                        className="relative h-full"
                        imgProps={{
                            src: '/top2.webp',
                            alt: 'top2_image',
                            layout: 'fill',
                            objectFit: 'cover',
                            objectPosition: 'top',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
