import { useLocation } from "react-router-dom";
import "./Game.css";

export default function Game() {
    const location = useLocation();
    const game = location.state.game;

    const gameRevs = {
        1: [
            { IGN: 'Rexaton972', dateReviewed: '2024-01-10', text: "Valorant combines fast-paced action with tactical gameplay, creating an engaging experience.", rating: 5 },
            { IGN: 'GamerX', dateReviewed: '2024-02-15', text: "The maps are well-designed, but balancing between characters could use some work.", rating: 4 },
            { IGN: 'MagicAce', dateReviewed: '2024-03-22', text: "Competitive play is thrilling, and the gun mechanics feel precise.", rating: 5 },
            { IGN: 'DragonHeart', dateReviewed: '2024-04-05', text: "Progression feels rewarding, but matchmaking can be frustrating at times.", rating: 4 },
            { IGN: 'ShadowStalker', dateReviewed: '2024-05-01', text: "A must-play for FPS fans with its innovative take on tactical shooting.", rating: 5 },
        ],
        2: [
            { IGN: 'PixelPhantom', dateReviewed: '2024-01-12', text: "League's strategic depth and character variety keep me coming back.", rating: 5 },
            { IGN: 'StealthyFox', dateReviewed: '2024-02-20', text: "The game is fantastic, but the community can be toxic for newcomers.", rating: 3 },
            { IGN: 'NightOwl', dateReviewed: '2024-03-30', text: "Frequent updates and new champions keep the experience fresh.", rating: 4 },
            { IGN: 'IronFist', dateReviewed: '2024-04-15', text: "The esports scene is unmatched, and the gameplay feels polished.", rating: 5 },
            { IGN: 'FrostBite', dateReviewed: '2024-05-10', text: "Steep learning curve but extremely rewarding once you get the hang of it.", rating: 5 },
        ],
        3: [
            { IGN: 'StarSeeker', dateReviewed: '2024-01-18', text: "Skyrim offers endless exploration and captivating lore.", rating: 5 },
            { IGN: 'CosmicRider', dateReviewed: '2024-02-28', text: "A timeless RPG with a rich world to get lost in.", rating: 5 },
            { IGN: 'RogueWanderer', dateReviewed: '2024-03-05', text: "The main story is great, but some side quests feel repetitive.", rating: 4 },
            { IGN: 'VoidRunner', dateReviewed: '2024-04-20', text: "Modding support makes this game a gift that keeps on giving.", rating: 5 },
            { IGN: 'LightBearer', dateReviewed: '2024-05-25', text: "Combat is simple yet satisfying, and the soundtrack is iconic.", rating: 4 },
        ],
        4: [
            { IGN: 'FireBlaze', dateReviewed: '2024-01-25', text: "Modern Warfare's campaign is one of the best in recent memory.", rating: 5 },
            { IGN: 'GhostHunter', dateReviewed: '2024-02-14', text: "Multiplayer modes are fast-paced and exhilarating.", rating: 4 },
            { IGN: 'DarkKnight', dateReviewed: '2024-03-10', text: "Graphics are stunning, but microtransactions can be frustrating.", rating: 3 },
            { IGN: 'SpecterSpade', dateReviewed: '2024-04-22', text: "The co-op mode is fun but lacks replayability.", rating: 3 },
            { IGN: 'ThunderStrike', dateReviewed: '2024-05-28', text: "Gunplay feels fluid, and the maps are diverse and well-designed.", rating: 4 },
        ],
        5: [
            { IGN: 'BattleKing', dateReviewed: '2024-01-05', text: "PUBG redefined the battle royale genre with intense matches and dynamic gameplay.", rating: 5 },
            { IGN: 'SniperLynx', dateReviewed: '2024-02-12', text: "While the gameplay is solid, server issues can sometimes ruin the experience.", rating: 3 },
            { IGN: 'SkylineAce', dateReviewed: '2024-03-18', text: "Scavenging for weapons and surviving against others is thrilling and rewarding.", rating: 4 },
            { IGN: 'IronHunter', dateReviewed: '2024-04-08', text: "Map variety and frequent updates keep the experience fresh.", rating: 4 },
            { IGN: 'ShadowScout', dateReviewed: '2024-05-16', text: "PUBG shines in its unpredictability, but the graphics are showing their age.", rating: 4 },
        ],
    };
    
    const reviews = gameRevs[game.id] || [];

    return (
        <div className="container">
            <h1 className="title">{game.name}</h1>
            <p className="description">
                <strong>{game.description}</strong>
            </p>
            <h2 className="reviews-title">Reviews</h2>
            {reviews.length > 0 ? (
                <ul className="review-list">
                    {reviews.map((review, index) => (
                        <li className="review-item" key={index}>
                            <p className="review-ign">Reviewer: {review.IGN}</p>
                            <p className="review-date">Date: {review.dateReviewed}</p>
                            <p className="review-text">{review.text}</p>
                            <p className="review-rating">Rating: {review.rating} / 5</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews available for this game.</p>
            )}
        </div>
    );
}
