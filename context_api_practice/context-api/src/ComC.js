import React from 'react'
import { FirstName } from './App';
const ComC = () => {
    return <div>
        <FirstName.Consumer> 
            {/* consumer always expects a function */}
            {
            (fname)=>{
                return <h1>{fname}</h1>
            }
            }
        </FirstName.Consumer>
    </div>
};

export default ComC;