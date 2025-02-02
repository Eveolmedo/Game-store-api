import { useState } from "react";
import { updateGame } from "../services/gameService";

const EditGame = ({ game, onGameUpdated, onCancel }) => {
  const [editedGame, setEditedGame] = useState({ ...game });

  const handleChange = (e) => {
    setEditedGame({ ...editedGame, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const success = await updateGame(game.id, editedGame);
    if (success) {
      onGameUpdated();
      onCancel();
    }
  };

  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-2">Editar Juego</h3>
      <input type="text" name="titulo" value={editedGame.titulo} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
      <input type="text" name="precio" value={editedGame.precio} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
      <textarea name="descripcion" value={editedGame.descripcion} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
      <button onClick={handleSave} className="bg-green-600 text-white p-2 rounded w-full mt-2 hover:bg-green-700">Guardar Cambios</button>
      <button onClick={onCancel} className="bg-gray-500 text-white p-2 rounded w-full mt-2">Cancelar</button>
    </div>
  );
};

export default EditGame;
