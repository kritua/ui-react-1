import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconConnectionBroadcasting = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m3.891 2.567 1.475 1.351A8.968 8.968 0 0 0 3 10c0 2.345.897 4.48 2.366 6.081L3.89 17.433A10.96 10.96 0 0 1 1 10a10.96 10.96 0 0 1 2.891-7.433Zm16.218 0A10.96 10.96 0 0 1 23 10a10.96 10.96 0 0 1-2.891 7.433l-1.475-1.351A8.968 8.968 0 0 0 21 10c0-2.344-.897-4.48-2.366-6.081l1.475-1.352ZM8.72 22l.666-2h5.226l.666 2h2.108l-3.286-9.858a3 3 0 1 0-4.202 0L6.613 22H8.72Zm1.333-4 .667-2h2.558l.667 2h-3.892Zm2.559-4-.338-1.012a3.052 3.052 0 0 1-.55 0L11.387 14h1.226ZM13 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a6.975 6.975 0 0 0-1.84-4.73l-1.474 1.352A4.982 4.982 0 0 1 17 10a4.982 4.982 0 0 1-1.314 3.379l1.474 1.351A6.975 6.975 0 0 0 19 10ZM8.314 6.621 6.84 5.27A6.975 6.975 0 0 0 5 10c0 1.823.697 3.484 1.84 4.73l1.474-1.351A4.982 4.982 0 0 1 7 9.999c0-1.302.498-2.488 1.314-3.378Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconConnectionBroadcasting;
