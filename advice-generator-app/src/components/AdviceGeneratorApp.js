import { useState, useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";
import Advice from "./Advice";

function AdviceGeneratorApp() {
    const [advice, setAdvice] = useState({});
    const [numberOfAdvices, setNumberOfAdvices] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setAdvice(
                    {
                        id: data.slip.id,
                        advice: data.slip.advice
                    }
                )
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setError(error);
                setLoading(false);
            })
    }, [numberOfAdvices])
    return (
        <>
            {loading && <Loading />}
            {error && <Error error={error} />}
            {!error && !loading && <Advice advice={advice} numberOfAdvices={numberOfAdvices} setNumberOfAdvices={setNumberOfAdvices} />}
        </>
    );
}

export default AdviceGeneratorApp;
