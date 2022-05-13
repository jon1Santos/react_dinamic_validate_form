import React, { useState, useRef} from 'react';

interface FormProps{
    children: JSX.Element[] | JSX.Element,
    validate?: Array<string[]>
};

const Form: React.FC<FormProps> = ({ children, validate })=>{
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const timerUpMessage = useRef<any>()
    
    const timer = (setting: (value: React.SetStateAction<boolean>) => void)=>{
       timerUpMessage.current = setTimeout(()=>{
            setting(false)
        }, 2500)
    };

    const renderChildren = ()=>{
        const Elements = children as JSX.Element[]
        if(Elements?.length > 1)
            return Elements.map(child => <div key={child.props.label}>{child}</div>)
        else
            return children
    }

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();

        clearTimeout(timerUpMessage.current)

        if((validate?.findIndex((e)=>e.findIndex(()=>0))) !== -1){
            setShowSuccess(false);
            setShowError(true);
            timer(setShowError)
        }
        else{
            setShowError(false)
            setShowSuccess(true);
            timer(setShowSuccess)
        }
    }

    return (
        <form className="box">
            {renderChildren()}
            {showError && <div className="notification is-danger">Invalid Form</div>}
            {showSuccess && <div className="notification is-success">Form has been sent</div>}
            <button className="button is-primary" onClick={e => onClick(e)}>Submit</button>   
        </form>
    )
}

export default Form;