import React, {useState} from "react"
import Shop from './Shop'
import AdminPanel from "./AdminPanel"

export default function Login(){
    let items = [
        {id: 1, name: "Item 1", price: 10},
        {id: 2, name: "Item 2", price: 15},
        {id: 3, name: "Item 3", price: 20}
      ]
    //accounts list
    let accounts = [
        {id: 1, username: "customer", password: "customer", role: "customer"},
        {id: 2, username: "admin", password: "admin", role: "admin"},
        {id: 3, username: "customer2", password: "customer", role: "customer"},
        {id: 4, username: "custome3", password: "customer", role: "customer"},
    ]
    //boolean state for login
    const [isLoggedIn, setIsLoggedIn] = useState (false);
    //variables for user Roles
    const [role, setRole] = useState("")
    //variables for user Usernames
    const [enteredUsernames, setEnteredUsernames] = useState("")
    //variables for user Passwords
    const [enteredPasswords, setEnteredPasswords] = useState("")

    function getUsernames(event){
        setEnteredUsernames(event.target.value)
    }
    function getPasswords(event){
        setEnteredPasswords(event.target.value)
    }

    function handleLogin(){
        accounts.map((account) => {
            if(account.username === enteredUsernames && account.password === enteredPasswords){
                setIsLoggedIn(true)
                setRole(account.role)
            }
        })
    }

    //component for render login page

    const renderLogin =() => {
        return(
            <div>
                <h1>Login:</h1>
                Username: <input type="text" placeholder="Username" onChange={getUsernames} />
                Password: <input type="text" placeholder="Password" onChange={getPasswords} />
                <button onClick = {handleLogin}>Login</button>
            </div>
        )
    }

    const renderShop = () => {
        return(
            <Shop  isLoggedIn = {isLoggedIn} items  = {items} />
        )
    }

    const renderAdmin =() =>{
        return(
            <AdminPanel isLoggedIn = {isLoggedIn} accounts = {accounts} />
        )
    }

    if(isLoggedIn === false){
        return renderLogin()
    }else{
        if(role === "customer"){
            return renderShop()
        }else{
            return renderAdmin()
            }
        
        }
    

}