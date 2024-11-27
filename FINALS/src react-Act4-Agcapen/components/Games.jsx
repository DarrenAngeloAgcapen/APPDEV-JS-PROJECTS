import { Link } from "react-router-dom"
const games = [
    { id: 1, name: "Valorant", description: 'Valorant is a 2020 first-person tactical hero shooter video game developed and published by Riot Games. A free-to-play game, Valorant takes inspiration from the Counter-Strike series, borrowing several mechanics such as the buy menu, spray patterns, and inaccuracy while moving.' },
    { id: 2, name: "League of Legends", description: 'Commonly referred to as League, it is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot sought to develop a stand-alone game in the same genre.' },
    { id: 3, name: "Elder Scrolls V: Skyrim", description: 'Set 200 years after the events of Oblivion, Skyrim takes place in the northernmost province of Tamriel. The story focuses on the Dragonborn, tasked with defeating Alduin the World-Eater, a dragon prophesied to destroy the world.' },
    { id: 4, name: "Call of Duty: Modern Warfare", description: 'Modern Warfare features cooperative play missions that follow on from the campaign. The multiplayer mode supports cross-platform multiplayer and progression for the first time in the series.' },
    { id: 5, name: "PlayerUnknown's Battlegrounds", description: 'PUBG: Battlegrounds (previously known as PlayerUnknowns Battlegrounds) is a 2017 battle royale video game published by Krafton, and developed by Kraftons PUBG Studios. Played from either a third-person or first-person perspective, up to one hundred players parachute onto an island where they are tasked to scavenge for weapons and equipment to kill other players while avoiding getting killed themselves.'},
];

export default function Games(){
    return(
        <>
            <h1 className="List">Games List: </h1>
            <ul>
                {games.map((game) => (
                    <li key = {game.id}><Link to = {`/games/${game.id}`} state = {{game}}><strong>{game.name}</strong></Link></li>
                ))}
            </ul>
        </>
    )
}