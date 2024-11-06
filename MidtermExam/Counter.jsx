import React,  {useState} from "react"
export default function Counter(){
    const [count, setCount] = useState(0)

    const IncrementCountx2 = () => {
        setCount(c => c + 2)
    }
    const DecrementCountx2 = () => {
        setCount(c => c - 2)
    }

    return(
        <>
            <div className="container">
                <p className="count-container">
                    {count}
                </p>
                &nbsp;
            <button className="button-container-increment" onClick={IncrementCountx2}>
            Increase by 2
            </button>

            <button className="button-container-decrement" onClick={DecrementCountx2}>
            Decrease by 2
            </button>
            </div>
        </>
    )
}