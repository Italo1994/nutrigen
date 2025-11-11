import axios from "axios";

const CLIENT_ID = "dcb276440c594f34bebf4707275208e2";
const CLIENT_SECRET = "dcb276440c594f34bebf4707275208e2";

export async function searchFood(foodName: string) {
  const response = await fetch(`http://localhost:3000/fat-secret/search?q=${foodName}`);
  console.log("response ", response)
  if (!response.ok) throw new Error("Erro ao buscar alimento");
  return await response.json();
}

