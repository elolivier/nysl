import { PropTypes } from 'prop-types';
import Game from './Game';

function GameList({ games }) {
  return (
    <table className="table table-striped table-responsive">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th>Teams</th>
          <th>Location</th>
          <th>Times</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(games).map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </tbody>
    </table>
  );
}
GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GameList;
