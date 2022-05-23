import React, {useState} from "react";
import style from "./style.css"

const Count =()=>{


    const[counter,setCounter]=useState(0)
    const Handleclick=(e)=>{

        if(e.target.name=="double"){
            setCounter(counter*2);
        }
        else if(e.targetname=='plus'){
            setCounter(counter+1)
        }
        else{
            setCounter(counter-1)
        }
    }

    return {
        <div>
        <h1 className={counter %2==0 ? style.green:style.red}>Count:{counter}</h1>
        
        <button onClick={Handleclick} name="plus">Increment</button>
        <button onClick={Handleclick} name="minus"><Decrement></Decrement></button>
        <button onClick={Handleclick} name="double"><Double></Double></button>
        
        </div>
    }
}
export default Count;