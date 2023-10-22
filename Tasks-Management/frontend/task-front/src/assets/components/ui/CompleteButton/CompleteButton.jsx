import {completeButton} from "./CompleteButton.module.css"

function CompleteButton({ fnOnClick, value }) {
    return (
        <button onClick={fnOnClick}className={completeButton}>{value}</button>
    )
}

export default CompleteButton