import React, { useState } from "react";
import App from "./App";
import './Shop.css'

export default function Shop(props) {
    let ShopItems = props.items; // these are arrays of objects being passed to ShopItems
    const [cart, setCart] = useState([]);
    const [payment, setPayment] = useState(0);
    const [change, setChange] = useState(null);
    const [showReceipt, setShowReceipt] = useState(false);

    function AddItem(item) {
        setCart((c) => [...c, item]);
    }

    function TOTAL() {
        const total = cart.reduce((acc, item) => acc + item.price, 0);
        return (
            <>
                <p><strong>TOTAL PRICE: ₱{total}</strong></p>
            </>
        );
    }

    function handlePayment(event) {
        setPayment(Number(event.target.value));
    }

    function calculateChange() {
        const total = cart.reduce((acc, item) => acc + item.price, 0);
        const calculatedChange = payment - total;
        setChange(calculatedChange);

        // Show receipt only if change is 0 or above
        if (calculatedChange >= 0) {
            setShowReceipt(true);
        } else {
            setShowReceipt(false);
        }
    }

    function RenderItems() {
        return (
            ShopItems.map((item) => {
                return (
                    <div key={item.id}>
                        <li>{item.name}</li>
                        <p>Price per piece: ₱{item.price}</p>
                        <button onClick={() => AddItem(item)}>Add to Cart</button>
                    </div>
                );
            })
        );
    }

    function renderCart() {
        return (
            cart.map((item) => {
                return (
                    <div key={item.id}>
                        <li>{item.name} || Price per piece: ₱{item.price}</li>
                    </div>
                );
            })
        );
    }

    function renderReceipt() {
        const total = cart.reduce((acc, item) => acc + item.price, 0);
        return (
            <>
                <h4>Receipt</h4>
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>{item.name} - ₱{item.price}</li>
                    ))}
                </ul>
                <p><strong>Total Price: ₱{total}</strong></p>
                <p><strong>Amount Paid: ₱{payment}</strong></p>
                <p><strong>Change: ₱{change >= 0 ? change : "Insufficient Amount!"}</strong></p>
            </>
        );
    }

    return (
        <>
            <h2>This is the shop:</h2>
            <ul>{RenderItems()}</ul>
            <h4>This is Your Cart Items:</h4>
            {cart.length > 0 ? (<ul>{renderCart()}</ul>) : (<p>There are no items in the Cart!</p>)}
            <br />
            {cart.length > 0 && <TOTAL />}
            <br />
            {cart.length > 0 && (
                <>
                    <p>
                        Enter Payment: ₱
                        <input type="number" value={payment} onChange={handlePayment} placeholder="0" />
                    </p>
                    <button onClick={calculateChange}>Calculate Change</button>
                    {change !== null && (
                        <p><strong>{change >= 0 ? `Change: ₱${change}` : "Insufficient Amount!"}</strong></p>
                    )}
                </>
            )}
            <br />
            {showReceipt && renderReceipt()}
        </>
    );
}
