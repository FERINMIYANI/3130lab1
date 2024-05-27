import React from "react";
import { useState, useEffect } from "react";

const Contact = () => {

    const [visit, setVisit] = useState(0)

    useEffect(() => {
        const getV = localStorage.getItem('visit');
        setVisit((parseInt(getV)) + 1);
    }, [])

    return(
        <div>
            <h1>Welome to Contact Page</h1>
            <h1>Home page was visited {visit} time</h1>
        </div>
    )
}

export default Contact;