import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconCircleUser = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm7.4-5.875a9 9 0 1 0-14.799 0C5.726 15.638 8.37 15 12 15c3.63 0 6.274.638 7.4 2.125Zm-1.435 1.615C17.672 17.687 15.569 17 12 17c-3.57 0-5.672.687-5.965 1.74A8.966 8.966 0 0 0 12 21a8.966 8.966 0 0 0 5.965-2.26ZM12 15c-2.24 0-4-1.573-4-5 0-2.244 1.58-4 4-4 2.414 0 4 1.922 4 4.2 0 3.28-1.782 4.8-4 4.8Zm-2-5c0 2.27.818 3 2 3 1.178 0 2-.702 2-2.8 0-1.25-.784-2.2-2-2.2-1.266 0-2 .816-2 2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCircleUser;
