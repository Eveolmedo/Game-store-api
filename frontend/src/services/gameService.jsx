const API_URL = "https://game-store-api-9zl9.onrender.com"


// Obtener el token de autenticacion para las peticiones que lo necesitan
const token = localStorage.getItem("token");

// Obtiene la lista de juegos desde la API.
export const fetchGames = async () => {
  try {
    const response = await fetch(`${API_URL}/api/games`);
    if (!response.ok) throw new Error("Error al obtener los juegos");
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

// Agrega un nuevo juego a la API.
export const addGame = async (game) => {
    try {
        const response = await fetch(`${API_URL}/api/games`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Enviar el token en la peticion
        },
        body: JSON.stringify(game),
        });

        return response.ok;
    } catch (error) {
        console.error("Error al agregar el juego:", error);
        return false;
    }
};

// Actualiza un juego en la API.
export const updateGame = async (id, updatedGame) => {
    try {
        const response = await fetch(`${API_URL}/api/games/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(updatedGame),
        });

        return response.ok;
    } catch (error) {
        console.error("Error al actualizar el juego:", error);
        return false;
    }
};


// Elimina un juego de la API.
export const deleteGame = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/games/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    return response.ok;
  } catch (error) {
    console.error("Error al eliminar el juego:", error);
    return false;
  }
};