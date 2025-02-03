import { useEffect, useState } from "react";
import { fetchGames } from "../services/gameService.jsx";
import AddGame from "./AddGame.jsx";
import GameItem from "./GameItem.jsx";

const GameList = () => {
  const [games, setGames] = useState([]);
  const role = localStorage.getItem("role");
  const isAdmin = role === "admin";

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    const data = await fetchGames();
    setGames(data);
  };

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl font-bold text-center mb-5">Lista de Juegos</h2>

      {isAdmin && <AddGame onGameAdded={loadGames} />}

      <div className="grid lg:grid-cols-3 gap-4">
        {games.map((game) => (
          <GameItem key={game.id} game={game} isAdmin={isAdmin} onGameUpdated={loadGames} onGameDeleted={loadGames} />
        ))}
      </div>
    </div>
  );
};

export default GameList;