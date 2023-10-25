import {Btn} from "./Button.module.css"

function Button({ fnOnClick, value }) {
    return (
        <button onClick={fnOnClick}className={Btn}>{value}</button>
    )
}

export default Button