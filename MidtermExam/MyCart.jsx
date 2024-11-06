import React, {useState} from 'react'

export default function MyCart(){
    const [cart, setCart] = useState(["Detergent", "Shampoo", "Shaver"])
    
    function handleAddCart(){

        const newCart = document.getElementById("cartInput").value;
        setCart(g =>[...g, newCart])
        document.getElementById("cartInput").value = "";
    }

    return(
        <>
        <div>
            <p>These are inside MyCart:</p>
            <ul>
                {
                cart.map((cart, index) => <li key = {index} onClick = {() => handleRemoveCart(index)}>{cart}</li>)
                }
            </ul>
            <input type="text" name="cartInput" id="cartInput" />
            <button type="button" onClick={handleAddCart}>Add Item</button>

        </div>
        </>
    )
}