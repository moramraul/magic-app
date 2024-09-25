import Header from "./Header"
import { Link } from "react-router-dom";

export default function HomeMenu() {
    return (
        <div className="home-container">
            <Header/>
            <div className="image-front-container">
                <img className="card-1" src="/magic-kids.png"/>
                <img className="card-2" src="/magic-kids-2.png"/>
            </div>
            <div className="home-text">
                <h2>CONSIGUE UN MAZO ALEATORIO Y JUEGA CON ÉL EN MAGIC ARENA Y ONLINE</h2>
            </div>
            <div className="button-container">

            <button className="start-button">
            <Link to={"/form"}>Empezar</Link></button>
            </div>
        </div>
    )
}