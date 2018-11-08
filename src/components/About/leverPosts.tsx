import * as React from 'react';
const LeverPosts = (props:any) => { 
    return (
        <div className="col-md-4 pl-3 pr-3"  >
            <div className="block">
                <h5 className="text-dark">{props.text}</h5>
                <p> {props.categories.commitment}, {props.categories.location}, {props.categories.team}</p>
                <a href={props.applyUrl} target="blank">Apply</a>
            </div>
        </div>
    )
}


export default LeverPosts