import { deleteGame } from "../services/gameService.jsx";

const DeleteGame = ({ gameId, onGameDeleted }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm("¿Estás seguro de que quieres borrar este juego?");
    if (confirmDelete) {
      const success = await deleteGame(gameId);
      if (success) onGameDeleted();
    }
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
      Borrar
    </button>
  );
};

export default DeleteGame;