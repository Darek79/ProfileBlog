import type { HTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWrappedI extends HTMLAttributes<HTMLDivElement> {
    imgProps: ImageProps;
}

export default function ImageWrapped({ imgProps, ...rest }: ImageWrappedI): JSX.Element {
    return (
        <div {...rest}>
            <Image {...imgProps} />
        </div>
    );
}
