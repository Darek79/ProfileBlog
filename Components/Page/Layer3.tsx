import { Box, Header, ImageWrapped, TitleDescImg, PageWrapper } from 'Components';
import img1 from 'public/img1.jpeg';
import img2 from 'public/img2.jpeg';
import img3 from 'public/img3.jpeg';
import Frida from 'public/Frida.webp';
import womanLookDown from 'public/womanLookDown.webp';
interface Layer3I {}

export default function Layer3(): JSX.Element {
    return (
        <PageWrapper
            className="pageWrapperOutside"
            boxInnerClasses="bg-pageWhite maxWidthPage px-3 w-full sm:px-10 pb-10"
        >
            <Box className="grid grid-cols-1 bg- md:grid-cols-2 gap-x-4 h-[1000px] md:h-[90vh] overflow-hidden">
                <TitleDescImg
                    className=" relative"
                    headerProps={{
                        className: 'absolute bottom-0 z-20 p-5',
                        restH2: { className: 'text-[3rem] leading-10 font-Rozha text-pageWhite pt-10 w-1/2' },
                        restP: { className: 'text-pageWhite pt-5' },
                        title: 'Frida Gustavsson',
                        description: `Gustavsson began modeling locally in 2008 and in the same year she moved to Japan to pursue modelling. She opened the Valentino Haute Couture fall 2013 show in Paris`,
                    }}
                    boxOuterProps={{ className: 'pt-10 w-full h-full' }}
                    boxInnerProps={{ className: 'w-full h-full' }}
                    imageWrapperProps={{ className: 'relative w-full h-full' }}
                    imgProps={{
                        src: Frida,
                        layout: 'fill',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        alt: 'blwoman',
                    }}
                />
                <TitleDescImg
                    className="relative"
                    headerProps={{
                        className: 'absolute bottom-0 z-20 p-5',
                        restH2: { className: 'text-[3rem] leading-10 font-Rozha text-pageWhite pt-10 w-1/2' },
                        restP: { className: 'text-pageWhite pt-5' },
                        title: 'Lux Rocker Looks',
                        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum est eget tristique iaculis. Donec vehicula eget arcu et finibus. Pellentesque eget mollis neque, id fermentum nulla. Suspendisse non dui ut turpis scelerisque convallis.`,
                    }}
                    boxOuterProps={{ className: 'pt-10 w-full h-full' }}
                    boxInnerProps={{ className: 'w-full h-full' }}
                    imageWrapperProps={{ className: 'relative w-full h-full' }}
                    imgProps={{
                        src: womanLookDown,
                        layout: 'fill',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        alt: 'blwoman',
                    }}
                />
            </Box>
            <Box className="pt-10 grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
                <ImageWrapped
                    className="drop-shadow-lg"
                    imgProps={{
                        src: img1,
                        layout: 'responsive',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        alt: 'img1',
                    }}
                />
                <ImageWrapped
                    className="drop-shadow-lg"
                    imgProps={{
                        src: img2,
                        layout: 'responsive',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        alt: 'img2',
                    }}
                />
                <ImageWrapped
                    className="drop-shadow-lg"
                    imgProps={{
                        src: img3,
                        layout: 'responsive',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        alt: 'img3',
                    }}
                />
                <ImageWrapped
                    className="drop-shadow-lg"
                    imgProps={{
                        src: img1,
                        layout: 'responsive',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        alt: 'img3',
                    }}
                />
            </Box>
            <Box className="grid sm:grid-cols-2 gap-4 pt-10">
                <Header
                    className="bg-layer1Grey px-3 py-5 drop-shadow-lg"
                    title="Transform lives"
                    description="Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor."
                    restH2={{ className: 'text-[1.5rem] text-pageWhite font-bold font-Rozha' }}
                    restP={{ className: 'text-[1.1rem] pt-2 text-pageWhite ' }}
                />
                <Header
                    className="px-3 py-5 drop-shadow-lg"
                    title="Join the Movement"
                    description="Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor."
                    restH2={{ className: 'text-[1.5rem] font-bold text-layer1Grey font-Rozha' }}
                    restP={{ className: 'text-[1.1rem] pt-2 text-layer1Grey' }}
                />

                <Header
                    className="px-3 py-5 drop-shadow-lg"
                    title="Train for a Race"
                    description="Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor."
                    restH2={{ className: 'text-[1.5rem] font-bold text-layer1Grey font-Rozha' }}
                    restP={{ className: 'text-[1.1rem] pt-2 text-layer1Grey' }}
                />
                <Header
                    className="bg-layer1Grey px-3 py-5 drop-shadow-lg"
                    title="Train for a Race"
                    description="Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor."
                    restH2={{ className: 'text-[1.5rem] font-bold text-pageWhite font-Rozha' }}
                    restP={{ className: 'text-[1.1rem] pt-2 text-pageWhite' }}
                />
            </Box>
        </PageWrapper>
    );
}
