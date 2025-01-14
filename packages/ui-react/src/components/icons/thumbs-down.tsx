import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconThumbsDown = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M16.137 15.558a99.26 99.26 0 0 1-.182-.482L15.927 15H19c1.87 0 3-1.318 3-3 0-5.944-1.245-10-4-10h-7.001a6.702 6.702 0 0 0-2.336.382 4.885 4.885 0 0 0-1.01.492A1.998 1.998 0 0 0 6 2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2a2 2 0 0 0 .57-.083c.698 1.015 2.46 3.03 3.877 4.648.768.878 1.434 1.639 1.773 2.061l.3.374h.488c.607 0 1.134-.046 1.74-.222C16.092 21.386 17 20.472 17 19c0-.52-.092-1.075-.262-1.69a15.716 15.716 0 0 0-.44-1.329l-.161-.423ZM8 13V6c0-.902.452-1.418 1.337-1.735a4.814 4.814 0 0 1 1.629-.266L16.534 4H18c1.015 0 2 3.21 2 8 0 .64-.309 1-1 1h-4c-1.194 0-1.444.924-1.195 1.924.058.235.144.494.274.846l.194.513.15.396c.171.46.293.822.387 1.162.126.457.19.842.19 1.159 0 .451-.238.69-.81.857-.242.07-.479.11-.73.128-.526-.63-1.28-1.489-2.055-2.374-1.503-1.714-3.089-3.523-3.263-3.93A1.662 1.662 0 0 1 8 13Zm-4 0V4h2v9H4Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconThumbsDown;
