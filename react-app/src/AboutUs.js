import { useState } from "react";

const AboutUs = () => {

    const [employees, setEmployees] = useState([
        { name: 'Jean', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit sapiente voluptates distinctio inventore fugiat, aut vel ipsam voluptate minus deserunt praesentium repellat a ut! Error cumque itaque debitis quisquam?', id: 1 },
        { name: 'Marcel', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit sapiente voluptates distinctio inventore fugiat, aut vel ipsam voluptate minus deserunt praesentium repellat a ut! Error cumque itaque debitis quisquam?', id: 2 },
        { name: 'Yasmine', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit sapiente voluptates distinctio inventore fugiat, aut vel ipsam voluptate minus deserunt praesentium repellat a ut! Error cumque itaque debitis quisquam?', id: 3 }
    ]);

    return ( 
        <div className="about-us preview">
            <div className="preview">
                <h2>Notre Compagnie</h2>
                <p>Fondé en 1980, Swarvo est une compagnie spécialisé en developpement de jeux vidéos. Avec un total de 100'000 clients, notre compagnie à pu amasser une quantité énorme de fonds permettant de continuer à sortir des jeux. Notre plus grande fierté et notre cote remarquable auprés de nos utilisateurs.</p>
            </div>
            {employees.map((employee) => (
                <div className="preview" key={ employee.id }>
                    <h2>{ employee.name }</h2>
                    <p> { employee.description } </p>
                </div>
            ))}
        </div>
     );
}
 
export default AboutUs;