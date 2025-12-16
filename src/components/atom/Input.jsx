const Input = (props) => {
    return (
        <input className={props.style ?? "bg-neutral-500 border-white border rounded-md p-1"} type={props.type} />
    )
}

export default Input