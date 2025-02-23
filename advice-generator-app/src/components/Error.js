import "../css/error.css"
export default function Error(props) {
    return (
        <div className="error">
            <h2>Error: {props.error.message}</h2>
        </div>
    )
}