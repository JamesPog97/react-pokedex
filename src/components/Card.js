import { Link } from "react-router-dom";

export default function Card({ pokemon }) {
    return (
        <div className="card">
            <Link to={`/pokemon/${pokemon.num}`}>
                <div
                    className="image"
                    style={{
                        backgroundImage: `url("/images/${pokemon.num.toString().padStart(3, "0")}.png")`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }}
                ></div>
                <div className="info">
                    <div className="ID">
                        #{pokemon.num.toString().padStart(3, "0")}
                    </div>
                    <h4>{pokemon.name}</h4>
                    <span>
                        Type: {pokemon.variations[0].types[0]}{pokemon.variations[0].types[1] ?
                            `, ${pokemon.variations[0].types[1]}` : ""}
                    </span>
                </div>
            </Link>
        </div>
    );
}
