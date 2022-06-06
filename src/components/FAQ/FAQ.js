import React, {useState} from 'react'
import { questions } from "./api";
import MYFAQ from './MYFAQ';
import './FAQ.css';

const FAQ = () => {
    const [data, setData] = useState(questions);
    return (
        <>
            <section className="main-div">
                <h1>Frequently Asked Questions </h1>
        {
                data.map((curElem) => {
                    return <MYFAQ key={curElem.id} {...curElem} />
                    //here the spread operator is use to pass the the properties of the questions api
                })        
        }
                 </section>
        </>
    )
}

export default FAQ