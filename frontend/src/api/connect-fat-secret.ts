import axios from "axios";

const CLIENT_ID = "dcb276440c594f34bebf4707275208e2";
const CLIENT_SECRET = "dcb276440c594f34bebf4707275208e2";

export async function searchFood(foodName?: string) {
  const response = await axios.get(`https://raw.githubusercontent.com/Italo1994/data-food-nutrigen/refs/heads/main/foods_extended_dataset.json`)
  //console.log("response ", response.data)
  //if (!response.ok) throw new Error("Erro ao buscar alimento");
  return response.data;
}

