import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function Game({ game }) {
  const navigate = useNavigate();
  return (
    <tr key={game.id} onClick={() => navigate(`/game/${game.id}`)}>
      <td>{game.date}</td>
      <td>
        {game.teams[0]}
        {' '}
        vs
        {game.teams[1]}
      </td>
      <td>{game.location}</td>
      <td>{game.time}</td>
    </tr>
  );
}
Game.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.string,
    teams: PropTypes.arrayOf(PropTypes.string),
    location: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
};

export default Game;
