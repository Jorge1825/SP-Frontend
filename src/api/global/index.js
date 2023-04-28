// Importaciones de axios
import axios from "axios";

// Instancia de axios con la URL de la API
const sugarAxios = axios.create({
  baseURL: "https://software-panelerotest.onrender.com",
});

export { sugarAxios };
