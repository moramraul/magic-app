import Header from "./Header"

export default function HomeMenu() {
    return (
        <div className="home-container">
            <Header/>
            <div className="home-text">
                <h2>CONSIGUE UN MAZO ALEATORIO Y JUEGA CON ÉL EN MAGIC ARENA Y ONLINE</h2>
            </div>
            <div className="button-container">

            <button className="start-button">Empezar</button>
            </div>
        </div>
    )
}