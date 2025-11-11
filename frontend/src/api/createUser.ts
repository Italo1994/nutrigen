import axios from 'axios'
import Error from 'next/error'

const API_URL = "http://localhost:3000"

interface UserResponse {
    id: string;
    name: string;
    email: string;
    password: string;
    age: number;
}

export async function createUser(name: string, email: string, password: string, age: number) {
    try {
        const response = await axios.post<UserResponse>(`${API_URL}/users`, {
            name,
            email,
            password,
            age
        })

        localStorage.setItem('auth_data', JSON.stringify(response.data))

        return response.data

    } catch(error: unknown) {
        //throw new Error(error.response?.data?.detail || "erro ao tentar logar")
        console.log(error)
        
    }
}