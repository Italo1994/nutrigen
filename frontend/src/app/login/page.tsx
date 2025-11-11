"use client"

import { Form } from "@/components/Form/Form";

export default function Login() {
    const fields = [
        { name: "email", type: "email", placeholder: "e-mail address" },
        { name: "password", type: "password", placeholder: "password" }
    ]

    return (
        <main className="flex justify-center items-center w-full h-screen">
            <Form fields={fields} isLogin={true} />
        </main>
    )
}