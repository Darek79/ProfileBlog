import { HTMLAttributes } from 'react';
import { Box, Header, ImageWrapped } from 'Components';
import { ImageProps } from 'next/image';
import type { HeaderI } from '../molecules/Header';
interface TitleDescImgI extends HTMLAttributes<HTMLDivElement> {
    boxOuterProps?: HTMLAttributes<HTMLDivElement>;
    boxInnerProps?: HTMLAttributes<HTMLDivElement>;
    imageWrapperProps?: HTMLAttributes<HTMLDivElement>;
    imgProps: ImageProps;
    headerProps?: HeaderI;
}

export default function TitleDescImg({
    headerProps,
    boxInnerProps,
    imageWrapperProps,
    boxOuterProps,
    imgProps,
    ...rest
}: TitleDescImgI): JSX.Element {
    return (
        <Box {...rest}>
            <Header {...headerProps} />
            <Box {...boxOuterProps}>
                <Box {...boxInnerProps}>
                    <ImageWrapped {...imageWrapperProps} imgProps={imgProps} />
                </Box>
            </Box>
        </Box>
    );
}

{
    /* <Box {...rest}>
<Header
    restH2={{ className: 'text-[2.25rem] text-layer1Grey pt-10' }}
    restP={{ className: 'text-layer1Grey pt-8' }}
    title="About Us"
    description="Canadian model Coco Rocha is featured on the cover. Lorem ipsum dolor sit amet, consectetur
adipiscing elit nullam nunc justo sagittis suscipit ultrices. Maecenas convallis purus vel velit
semper vehicula. Etiam consectetur aliquet lacus, nec efficitur diam consectetur nec."
/>
<Box className="pt-10">
    <Box className="pr-8 w-[400px]">
        <ImageWrapped
            className="relative "
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
</Box> */
}
