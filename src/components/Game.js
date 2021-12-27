export const Game = ({ game }) => (
  <tr>
    <td>{game.date}</td>
    <td>
      {game.teams[0]} vs {game.teams[1]}
    </td>
    <td>{game.location}</td>
    <td>{game.time}</td>
  </tr>
);