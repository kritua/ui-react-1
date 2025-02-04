import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconShieldNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 1c-2.091 0-4.17.7-5.512 1.273l1.521 1.522C9.216 3.368 10.721 3 12 3c2.26 0 4.414.68 5.89 1.664.237.158.659.42.982.62l.138.085c.002.593.003 2.509 0 4.74l-.004 1.692-.004 1.954-.002 1.03 1.693 1.693c.205-.492.307-.985.307-1.478l.004-2.205C21.01 9.837 21.02 5.217 21 5c0-.768-.294-.946-1.11-1.44-.247-.15-.541-.328-.89-.56-1.5-1-4.005-2-7-2ZM3.07 4.485 1.294 2.707l1.414-1.414 20 20-1.414 1.414-3.178-3.178C16.642 20.686 14.603 21.843 12 23c-6-2.673-9-5.34-9-8V5c0-.21.022-.375.07-.515Zm13.624 13.623L5 6.414V15c0 1.509 2.23 3.569 7.001 5.802 2.006-.937 3.563-1.844 4.693-2.694Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconShieldNo;
