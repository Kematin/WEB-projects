import {completeButton} from "./CompleteButton.module.css"

function CompleteButton({ fnOnClick }) {
    return (
        <button onClick={fnOnClick} className={completeButton} />
    )
}

export default CompleteButton