import { SVGAttributes } from 'react';

interface HamburgerI extends SVGAttributes<SVGElement> {
    fn?: () => void;
}

export default function HamburgerSVG({ fn, ...rest }: HamburgerI) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257 149" className="hamburger5" onClick={fn} {...rest}>
            <line
                className="lin1"
                x1="2.5"
                y1="2.5"
                x2="254.5"
                y2="2.5"
                fill="#F8F9FA"
                stroke="#F8F9FA"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="20"
                shapeRendering="crispEdges"
            />
            <line
                className="lin2"
                x1="2.5"
                y1="74.5"
                x2="254.5"
                y2="74.5"
                fill="#F8F9FA"
                stroke="#F8F9FA"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="20"
                shapeRendering="crispEdges"
            />
            <line
                className="lin3"
                x1="2.5"
                y1="74.5"
                x2="254.5"
                y2="74.5"
                fill="#F8F9FA"
                stroke="#F8F9FA"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="20"
                shapeRendering="crispEdges"
            />
            <line
                className="lin4"
                x1="2.5"
                y1="146.5"
                x2="254.5"
                y2="146.5"
                fill="#F8F9FA"
                stroke="#F8F9FA"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="20"
                shapeRendering="crispEdges"
            />
        </svg>
    );
}
