import {completeButton} from "./Button.module.css"

function Button({ fnOnClick, value }) {
    return (
        <button onClick={fnOnClick}className={completeButton}>{value}</button>
    )
}

export default Button