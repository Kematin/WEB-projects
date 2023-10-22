import {input} from "./Input.module.css"

function Input({label, type, value, fnOnChange}) {
    return (
        <div className={input}>
            <label>
                {label}
                <input
                    type={type}
                    value={value}
                    onChange={fnOnChange} />
            </label>
        </div>
        
    )
}

export default Input