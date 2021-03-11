import React, { useState } from 'react';
import './index.css';
import './App.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
    const [show, setShow] = useState(false);

    const changeshow =()=>{
        setShow(!show);
    }
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button onClick={changeshow} className='btn'>{show?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
                   
            </header>
                {show && <p>{info}</p>}
        </article>

  );
};

export default Question;