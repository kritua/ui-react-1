import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconCallMissed = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M7 8V5.414l5 5 6.707-6.707-1.414-1.414L12 7.586 8.414 4H11V2H5v6h2Zm7.427 9.324c-.618-.206-1.503-.324-2.43-.324-.927 0-1.812.118-2.43.324-.27.09-.464.188-.569.275v.9c0 .557-.013.839-.083 1.178-.15.719-.55 1.276-1.317 1.32-2.018.335-3.366.503-4.098.503C2.042 21.5 1 20.197 1 19v-1.5c0-3.724 5.027-6.501 10.997-6.5 5.972.001 10.997 2.777 10.997 6.473.004.166.006.338.006.533 0 .14 0 .253-.003.503a50.69 50.69 0 0 0-.003.491c0 1.19-1.044 2.5-2.5 2.5-.731 0-2.077-.167-4.092-.502-1.052-.043-1.342-.814-1.397-1.954-.008-.163-.01-.29-.01-.543V17.6c-.104-.086-.299-.185-.568-.275ZM6.998 18.5v-1c0-1.766 2.207-2.5 5-2.5s4.998.734 4.998 2.5v1a8.612 8.612 0 0 0 .015.572c1.75.285 2.927.428 3.483.428.239 0 .5-.328.5-.5 0-.143 0-.256.003-.51l.003-.485c0-.177-.002-.332-.006-.505 0-2.299-3.983-4.499-8.997-4.5C6.984 12.999 3 15.2 3 17.5V19c0 .178.257.5.5.5.556 0 1.733-.143 3.484-.429.01-.134.014-.31.014-.571Z" clipRule="evenodd" />
    </SVG>
);

export default IconCallMissed;