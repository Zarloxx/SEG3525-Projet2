import { Link } from "react-router-dom";

const GamePreview = () => {
    return ( 
        <div className="game-preview">
            <div className="preview">
                <h2>Nom du Jeu</h2>
                <h3>Description:</h3>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illo impedit accusantium necessitatibus, fugiat quia repellat autem in, ea maxime dolores corporis distinctio voluptatum sit iusto? Doloremque dignissimos vel eius.</p>
                <h3>Requirements:</h3>
                 <p>RAM: 8GB</p>
                 <p>GPU: GTX2060</p>
                 <p>CPU: intel-i7 9900k</p>
                <h3>Prix:</h3>
                 <p>45$</p>
            </div>
            <div className="preview">
                <Link to="/Purchase" className="preview" style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: 10
                }}>Acheter</Link>
            </div>
        </div>
     );
}
 
export default GamePreview;