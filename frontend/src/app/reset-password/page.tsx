import { Form } from "@/components/Form/Form"


export default function ForgotPassword() {

    const fields = [
        { name: "email", type: "email", placeholder: "e-mail address" },
        
    ]
    
    return (
        <main className="flex justify-center items-center w-full h-screen">
            <Form fields={fields} isReset={true} />
        </main>
    )
    
}