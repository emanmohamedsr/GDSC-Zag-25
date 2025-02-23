import "../css/advice.css"
export default function Advice(props) {
    return (
        <div className="advice-container">
            <div className="advice">
                <h1 className="header">ADVICE #{props.advice.id}</h1>
                <p>"{props.advice.advice}"</p>
                <div className="shape">
                    <span></span>
                    <span></span>
                </div>
                <button onClick={() => props.setNumberOfAdvices(props.numberOfAdvices + 1)}>⬛</button>
            </div>
        </div>
    )
}