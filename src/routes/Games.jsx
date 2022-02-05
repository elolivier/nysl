import GameList from '../components/GameList';

const gamesJson = require('../games.json');

function Games() {
  return (
    <div>
      <GameList games={gamesJson.games} />
    </div>
  );
}

export default Games;
