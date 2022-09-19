import { Box, Header, ImageWrapped, HamburgerSVG, PageWrapper } from 'Components';
import top1 from 'public/top1.jpeg';
import top2 from 'public/top2.webp';

export default function Layer1(): JSX.Element {
    return (
        <PageWrapper
            className="pageWrapperOutside bg-layer1Grey"
            boxInnerClasses="bg-layer1Grey maxWidthPage w-full sm:h-screen py-10 px-3 sm:px-10"
        >
            <Box className="flex">
                <HamburgerSVG className="w-[2.5rem] m-auto" />
            </Box>
            <Box className="relative w-full mt-20">
                <Header
                    className="w-full absolute z-20 -top-10 sm:-top-[3.8rem]"
                    restH2={{
                        className:
                            'font-Rozha leading-[3rem] sm:leading-[4.5rem] text-[6rem] sm:text-[8rem] text-layer1GreyTint text-center',
                    }}
                    restP={{
                        className: 'text-[3rem] text-layer1Grey text-center',
                    }}
                    title="fashion"
                    description="styling tips"
                />
                <Box className="flex w-full flex-col sm:flex-row h-[1000px] sm:h-[calc(80vh-20px)]">
                    <ImageWrapped
                        className="relative w-full h-full"
                        imgProps={{
                            src: top1,
                            alt: 'top1_image',
                            layout: 'fill',
                            objectFit: 'cover',
                            objectPosition: 'top',
                            priority: true,
                        }}
                    />

                    <ImageWrapped
                        className="relative w-full h-full"
                        imgProps={{
                            src: top2,
                            alt: 'top2_image',
                            layout: 'fill',
                            objectFit: 'cover',
                            objectPosition: 'top',
                            priority: true,
                        }}
                    />
                </Box>
            </Box>
        </PageWrapper>
    );
}
