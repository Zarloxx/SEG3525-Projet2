import { useState } from "react";

const ComingSoon = () => {

    const [upgames, setUpgames] = useState([
        { name: 'Roblox', thumbnail: '', id: 1 },
        { name: 'Among Us', thumbnail: '', id: 2 },
        { name: 'Mope.io', thumbnail: '', id: 3 },
        { name: 'Mario Kart', thumbnail: '', id: 4 }
    ]);

    return ( 
        <div className="upgames preview">
            <h1>Nos jeux à venir:</h1>
            {upgames.map((upgame) => (
                <div className="game-preview" key={ upgame.id }>
                    <h2>{ upgame.name }</h2>
                </div>
            ))}
        </div>
    );
}
 
export default ComingSoon;