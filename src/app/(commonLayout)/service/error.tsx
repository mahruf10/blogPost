
"use client";

import { useEffect } from "react";

const ServiceError = ({error,retry}:{error:Error;retry:() => void}) => {
    useEffect(()=>{
        console.error(error);
    },[error])
    return (
        <div>
            <h1>Something went wrong:please try again later.</h1>
            <button className='btn' onClick={retry}>
                Try Again
            </button>
        </div>
    );
};

export default ServiceError;