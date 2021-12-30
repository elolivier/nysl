import { Game } from "./Game";

export const GameList = ({ games }) => (
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
