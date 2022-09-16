import { HTMLAttributes, createElement } from 'react';

export default function Box({ children, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return createElement('div', { ...rest }, children);
}
