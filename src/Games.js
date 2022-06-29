import { useState } from "react";
import { Link } from "react-router-dom";

const Games = () => {

    const [games, setGames] = useState([
        { name: 'Valorant', thumbnail: '', id: 1 },
        { name: 'Minecraft', thumbnail: '', id: 2 },
        { name: 'League of Legends', thumbnail: '', id: 3 },
        { name: 'CS:GO', thumbnail: '', id: 4 },
        { name: 'Rust', thumbnail: '', id: 5 }
    ]);

    return (  
        <div className="games preview">
            <h1>Nos jeux:</h1>
            {games.map((game) => (
                <div className="game-preview" key={ game.id }>
                    <Link to="/GamePreview"><h2>{ game.name }</h2></Link>
                </div>
            ))}
        </div>
    );
}
 
export default Games;