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
      <p>
        {game.teams[0]} vs {game.teams[1]} game will be played on {game.date} at{" "}
        {game.time} in {location.fullName}
      </p>
      <div className="row">
        <iframe title="map" src={location.mapURL} loading="lazy"></iframe>
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
