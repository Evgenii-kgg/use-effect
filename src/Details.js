import React from "react";

const Details = (props) => {
console.log(props);

    return(
        <>
        <img src={props.info.avatar} />
        <div>{props.info.name}</div>
        <div>
        <div>{props.info.details?.city}</div>
        <div>{props.info.details?.company}</div>
        <div>{props.info.details?.position}</div>
        </div>
        </>
    )
}
export default Details;