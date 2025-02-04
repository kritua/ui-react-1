import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconEditorBrush = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M20 1v11.994c.009 1.523-.84 2.004-3.209 2.714-1.388.416-1.791.644-1.791.792 0 .768.07 1.283.22 1.883-.029-.116.142.544.18.72.066.31.1.591.1.897 0 1.66-1.562 3-3.5 3s-3.5-1.34-3.5-3c0-.306.034-.587.1-.897.038-.176.209-.837.18-.72.15-.6.22-1.115.22-1.883 0-.149-.402-.377-1.787-.792C4.848 14.998 4 14.518 4 13V1h16Zm-7.074 10H18v2c0 .15-.4.378-1.783.792l-.004.001C13.849 14.502 13 14.983 13 16.5c0 .94.092 1.617.28 2.367-.018-.071.137.527.164.655.039.18.056.324.056.478 0 .482-.604 1-1.5 1s-1.5-.518-1.5-1c0-.154.017-.298.056-.478.027-.128.182-.726.164-.654A9.09 9.09 0 0 0 11 16.5c0-1.518-.848-1.998-3.213-2.708C6.402 13.377 6 13.15 6 13v-2h6.926ZM6 9V3h2v4h2V3h2v3h2V3h4v6H6Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconEditorBrush;
