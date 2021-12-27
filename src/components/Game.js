import { useNavigate } from "react-router-dom";

export const Game = ({ game }) => {
  const navigate = useNavigate();
  return (
    <tr key={game.id} onClick={() => navigate(`/game/${game.id}`)}>
      <td>{game.date}</td>
      <td>
        {game.teams[0]} vs {game.teams[1]}
      </td>
      <td>{game.location}</td>
      <td>{game.time}</td>
    </tr>
  );
};
