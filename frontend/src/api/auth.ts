import axios from 'axios'
import Error from 'next/error'

const API_URL = "http://localhost:3000"

export async function login(email: string, password: string) {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, {
            email,
            password
        })

        //localStorage.setItem('auth_data', JSON.stringify(response.data))

        return response.data

    } catch(error: unknown) {
        //throw new Error(error.response?.data?.detail || "erro ao tentar logar")
        console.log(error)
    }
}