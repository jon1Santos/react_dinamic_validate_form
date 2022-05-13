import React, { useState, useEffect, useRef } from "react";

interface InputProps{
    label: string;
    typeInput: string;
    validation?: (e: string ) => string[];
}

const Input: React.FC<InputProps> = ({ label, typeInput, validation})=>{
    const [input, setInput] = useState('');
    const [errors, setErrors] = useState<string[]>();
    const timer = useRef<NodeJS.Timeout>();

    useEffect(()=>{
        if(validation){
            timer.current = setTimeout(()=>{
                if(input !== '')
                    setErrors(validation(input))
            }, 650);
        }

        return ()=> clearTimeout(timer.current);
    }, [input, validation, errors]);

    return (
        <div className="field">
            <label className="label">{label}: </label>
            <input className="input" onChange={e=> setInput(e.target.value)} value={input} type={typeInput} />
            {input && errors && errors.map(err=> <div className="has-text-danger" key={err}>{err}</div>)}
        </div>
    );
}

export default Input;