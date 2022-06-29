import { useState } from "react";

const Home = () => {

    const [name, setName] = useState("mario");

    const handleClick = (e) => {
        setName("luigi");
    }

    return (  
        <div className="home preview">
            <div className="image-container">
                <img src={require("./images/large_display.jpg")} alt="Large Display" className="large-display"/>
            </div>
            <div className="preview">
                <h2>Notre But</h2>
                <p>Depuis des génération, notre compagnie vise à ameliorer la qualité des jeux offert à ses clientsl. À l'aide de nouvelles technologies graphique ainsi qu'informatique, nous  somme capable de fournir une experience hors norme à tout nos joueur. Un aspect magique permettant de les satisfaire.</p>
            </div>
        </div>
    );
}
 
export default Home;