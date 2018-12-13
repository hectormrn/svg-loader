import React from "react";

//option for support React Element JSX 
export const WrapperSvg = (props) => (
    <svg {...props}>
        {props.children}
    </svg>
)

function createMarkup(html) {
    return {__html: html};
}

export const IconWrapper = (props) => (
    <div className={props.cssClass} dangerouslySetInnerHTML={createMarkup(props.data)} />
)