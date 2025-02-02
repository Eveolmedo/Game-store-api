import { useState } from "react";
import { addGame } from "../services/gameService";

const AddGame = ({ onGameAdded }) => {
  const [newGame, setNewGame] = useState({ titulo: "", precio: "", descripcion: "", img: "" });

  const handleChange = (e) => {
    setNewGame({ ...newGame, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const game = await addGame(newGame);
    if (game) {
      onGameAdded();
      setNewGame({ titulo: "", precio: "", descripcion: "", img: "" });
    }
  };

  return (
    <div className="border p-4 rounded shadow mb-5">
      <h3 className="text-xl font-bold mb-2">Agregar Nuevo Juego</h3>
      <input type="text" name="titulo" placeholder="Título" value={newGame.titulo} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
      <input type="text" name="precio" placeholder="Precio" value={newGame.precio} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
      <input type="text" name="img" placeholder="URL de la imagen" value={newGame.img} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
      <textarea name="descripcion" placeholder="Descripción" value={newGame.descripcion} onChange={handleChange} className="w-full p-2 border rounded mb-2" />
      <button onClick={handleSubmit} className="bg-blue-600 text-white p-2 rounded w-full mt-2 hover:bg-blue-700">Agregar Juego</button>
    </div>
  );
};

export default AddGame;