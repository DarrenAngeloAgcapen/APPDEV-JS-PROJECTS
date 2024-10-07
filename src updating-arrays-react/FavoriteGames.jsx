import React, {useState} from 'react'

export default function FavoriteGames(){
    //stateful array
    const [games, setGames] = useState(["Doomsday Hunters", "Hades", "ScourageBringer"])
    
    function handleAddGame(){

        const newGame = document.getElementById("gameInput").value; //referencing to text box
        setGames(g =>[...g, newGame])//adding newGame into our list g (previous list)
        document.getElementById("gameInput").value = "";
    }

    function   handleRemoveGame(index){
        const newGame = games.filter((game, i) => i !== index)
        setGames(newGame)
    }
    //ALWAYS CHECK CURLY BRACES FOR COMPONENTS
    return(
        <>
        <div>
            <h2>These are my Favorite Games for 2024</h2>
            <ul>
                {
                games.map((game, index) => <li key = {index} onClick = {() => handleRemoveGame(index)}>{game}</li>)
                }
            </ul>
            <input type="text" name="gameInput" id="gameInput" />
            <button type="button" onClick={handleAddGame}>Add Game</button>

        </div>
        </>
    )
}