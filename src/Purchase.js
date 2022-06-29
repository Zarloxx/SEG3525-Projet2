import { useState } from "react";

const Purchase = () => {

    const [color, setColor] = useState('white');
    const [text, setText] = useState("Acheter l'article");

    function handleClick(e){
        setColor('green');
        setText('Acheté!')
    }

    return ( 
        <div className="purchase preview">
            <form>
                <div class="form-group">
                    <label for="email-input"><h2>Addresse Email:</h2></label>
                    <input id="email-input" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="name-input"><h2>Nom:</h2></label><br />
                    <input id="name-input" placeholder="Nom" />
                </div>
                <div class="form-group">
                    <label for="date-input"><h2>Infomartion de payement:</h2></label>
                    <input id="card-number" placeholder="# de carte" />
                    <input id="cvv-number" placeholder="cvv" />
                    <input id="expiration-date" placeholder="mm/yy" />
                </div>

                <button id="register-appointment-data" class="btn btn-primary" onMouseDown={handleClick} style={{margin: '10px', backgroundColor: {color}}}>{text}</button>
            </form>
        </div>
     );
}
 
export default Purchase;