import { HTMLAttributes } from 'react';
import { Box } from 'Components';
interface PageWrapperI extends HTMLAttributes<HTMLDivElement> {
    boxInnerClasses?: string;
}

export default function PageWrapper({ boxInnerClasses, children, ...rest }: PageWrapperI): JSX.Element {
    return (
        <Box {...rest}>
            <Box className={boxInnerClasses}>{children}</Box>
        </Box>
    );
}

{
    /* <Box className="bg-layer1Grey w-full flex flex-col items-center">
<Box className="bg-layer1Grey maxWidthPage w-full sm:h-screen py-10 px-3 sm:px-10">{children}</Box>
</Box> */
}
