import React from "react";

function Image(props){
    return(
        <>
            <img src={props.src} alt={props.alt} width={'100%'} height={'300vh'}/>
        </>
    )
}

export default Image;