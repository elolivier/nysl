import { Game } from "./Game";

export const GameList = ({ games }) => (
  <table className="table table-striped">
    <thead>
      <th scope="col">SEPTEMBER</th>
      <th>Teams</th>
      <th>Location</th>
      <th>Times</th>
    </thead>
    <tbody>
      {Object.values(games).map((game) => (
        <Game game={game} />
      ))}
    </tbody>
  </table>
);