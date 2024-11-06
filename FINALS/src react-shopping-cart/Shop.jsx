import React, {useState} from "react"
import Login from "./Login"

export default function Shop(props){
    let ShopItems = props.items //these are arrays of objects being passed to ShopItems
    const [cart, setCart] = useState([])

    function AddItem(item){
        setCart (c => [...c, item])
    }

    function RenderItems(){
        return(
            ShopItems.map((item) => {
                return(
                    <>
                    <li key = {item.id} > {item.name}</li>
                    <p>Price per piece: ${item.price}</p>
                    <button onClick={() => AddItem(item)}>Add to Cart</button>
                    </>
                )
            })
        )
    }

    function renderCart() {
        return(
            cart.map((item) => {
                return(
                    <>
                    <li key = {item.id} > {item.name}</li>
                    <p>Price per piece: ${item.price}</p>
                    <br/>
                    </>
                )
            })
        )
    }
    if(props.isLoggedIn === false){
                return <Login />
            }
    else{
        return(
        <>
        
        <h2>This is the shop: </h2> 
        <ul>{RenderItems()}</ul>
        <h4>This is Your Cart Items: </h4>
        {cart.length > 0 ? (<ul>{renderCart()}</ul>) : (<p>There are no items in the Cart!</p>)}
        </>
        )
    }
    

}