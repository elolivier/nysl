import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const gamesJson = require("../games.json");

const GameInfo = () => {
  const params = useParams();
  const game = gamesJson.games.find((game) => game.id === params.gameId);
  const location = gamesJson.locations[game.location];
  return (
    <>
      <div>
        <p>
          {game.teams[0]} vs {game.teams[1]} game will be played on {game.date}{" "}
          at {game.time} in {location.fullName}
        </p>
        <div className="row">
          <iframe title="map" src={location.mapURL} loading="lazy"></iframe>
        </div>
        <div className="h-80">
          <h3 className=" text-center mt-4">Game Messaging</h3>
          <div className="inbox_msg">
            <img
              src="https://i.pinimg.com/originals/e3/1b/75/e31b752875679b64fce009922f9f0dda.gif"
              alt="chat"
            ></img>
          </div>
          <h3 className=" text-center mt-4">Sing In to chat!</h3>
        </div>
      </div>
    </>
  );
};

function Game() {
  return (
    <>
      <div>
        <Link to="/games">
          <FontAwesomeIcon
            size="lg"
            icon={faLongArrowAltLeft}
            color="darkgrey"
          />
        </Link>
      </div>
      <div>
        <GameInfo />
      </div>
    </>
  );
}

export default Game;
