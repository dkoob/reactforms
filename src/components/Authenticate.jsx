import { useState } from "react"

export default function Authenticate({token}) {
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [result, setResult] = useState(null)
    async function handleClick(){
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
            { 
                method: "GET", 
                headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
                }
            })
            const resultData = await response.json()
            setSuccessMessage(resultData.message)
            setResult(resultData)
        } catch (error) {
            setError(error.message)
        }
        return result
    }

    return (
        <div>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token</button>
            {result && result.data && <p>Current User: {result.data.username}</p>}
        </div>
    )
}

