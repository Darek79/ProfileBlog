import { HTMLAttributes } from 'react';
import { Box, Header, ImageWrapped } from 'Components';
import { ImageProps } from 'next/image';
interface ItemBoxI extends HTMLAttributes<HTMLDivElement> {
    imgWrapperProps?: HTMLAttributes<HTMLDivElement>;
    imgProps: ImageProps;
    boxOutterProps?: HTMLAttributes<HTMLDivElement>;
    pProps?: HTMLAttributes<HTMLElement>;
    spanProps?: HTMLAttributes<HTMLElement>;
    spanContent?: string;
    pContent?: number | string;
}

export default function ItemBox({
    imgWrapperProps,
    imgProps,
    boxOutterProps,
    pProps,
    spanProps,
    spanContent,
    pContent,
    ...rest
}: ItemBoxI): JSX.Element {
    return (
        <Box {...rest}>
            <ImageWrapped {...imgWrapperProps} imgProps={imgProps} />
            <Box {...boxOutterProps}>
                <p {...pProps}>
                    <span {...spanProps}>{spanContent}</span>
                    {pContent}
                </p>
            </Box>
        </Box>
    );
}

{
    /* <Box className="pb-10 relative">
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
</Box> */
}
