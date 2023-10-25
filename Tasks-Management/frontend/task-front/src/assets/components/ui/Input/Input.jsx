import {input, inputBox} from "./Input.module.css"

function Input({label, type, value, fnOnChange}) {
    return (
        <div className={inputBox}>
            <label>
                {label}
                <input
                    className={input}
                    type={type}
                    value={value}
                    onChange={fnOnChange} />
            </label>
        </div>
        
    )
}

export default Input