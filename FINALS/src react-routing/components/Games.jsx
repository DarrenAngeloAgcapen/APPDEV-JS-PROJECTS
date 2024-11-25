import { Link } from "react-router-dom"
const games = [
    {id:1, name: "Valo", description:'Most modern toxic fanbase'},
    {id:2, name: "LoL", description:'OG Toxic fanbase'},
    {id:3, name: "WoW", description:'just wow'},
    {id:4, name: "CODMW", description:'Best game of the series -Noob69'}
]
export default function Games(){
    return(
        <>
            <h1>Games List: </h1>
            <ul>
                {games.map((game) => (
                    <li key = {game.id}><Link to = {`/games/${game.id}`} state = {{game}}><strong>{game.name}</strong></Link> - {game.description}</li>
                ))}
            </ul>
        </>
    )
}