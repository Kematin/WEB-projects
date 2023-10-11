function Input({label, type, value, fnOnChange}) {
    return (
        <label>
            {label}
            <input
                type={type}
                value={value}
                onChange={fnOnChange} />
        </label>
    )
}

export default Input