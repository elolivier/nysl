import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const gamesJson = require("../games.json");

const GameInfo = () => {
  const params = useParams();
  const game = gamesJson.games.find((game) => game.id === params.gameId);

  return (
    <p>
      Game ID is {params.gameId} and retrieved location is {game.location}
    </p>
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
