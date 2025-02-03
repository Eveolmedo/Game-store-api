import { useState } from "react";
import EditGame from "./EditGame.jsx";
import DeleteGame from "./DeleteGame.jsx";

// Representacion de un solo juego
const GameItem = ({ game, isAdmin, onGameUpdated, onGameDeleted }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="border p-4 rounded shadow">
      {isEditing ? (
        <EditGame game={game} onGameUpdated={onGameUpdated} onCancel={() => setIsEditing(false)} />
      ) : (
        <>
          <img src={game.img} alt={game.titulo} className="object-contain" />
          <h1 className="font-bold text-2xl">{game.titulo}</h1>
          <p className="text-gray-700 text-lg">${game.precio}</p>
          <p className="text-gray-500 flex-grow">{game.descripcion}</p>
          {isAdmin && (
            <>
              <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 mt-auto">
                Editar
              </button>
              <DeleteGame gameId={game.id} onGameDeleted={onGameDeleted} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default GameItem;