"use client"

import { Form } from "@/components/Form/Form";

export default function Subscribe() {
    const fields = [
        { name: "name", type: "text", placeholder: "Name" },
        { name: "email", type: "email", placeholder: "Email" },
        { name: "password", type: "password", placeholder: "Password" },
        { name: "age", type: "text", placeholder: "Age" }
    ]

    return (
        <main className="flex justify-center items-center w-full h-screen">
            <Form fields={fields} isSubscribe={true} />
        </main>
    )
}