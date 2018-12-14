import React from "react";
import * as svgMap from './svgmap.json';

export const IconWrapper = (props) => {
    const svgIcon = svgMap.svg[props.svgIcon];
    return(
        <div className={props.cssClass} dangerouslySetInnerHTML={createMarkup(svgIcon)} />
    )
}

function createMarkup(html) {
    return {__html: html};
}

//option for support React Element
export const WrapperSvg = (props) => (
    <svg {...props}>
        {props.children}
    </svg>
)

