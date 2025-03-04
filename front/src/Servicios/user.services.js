import axios from "axios";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/user/login",
      { username, password }, // Enviar datos en el cuerpo de la solicitud
      { withCredentials: true } // Habilitar envío de cookies
    );
    
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};
