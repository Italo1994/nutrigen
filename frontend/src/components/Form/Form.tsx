"use client"

import { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../Card/Card";
import { Sprout } from "lucide-react";
import Link from "next/link";
import { Button } from "../Button/Button";
import { login } from "@/api/auth";

import { useRouter } from "next/navigation";
import { createUser } from "@/api/createUser";

interface Field {
    name: string;
    label?: string;
    type: string;
    placeholder?: string;
}

interface FormProps {
    fields: Field[];
    onSubmit?: (data: Record<string, string>) => void;
    isLogin?: boolean;
    isSubscribe?: boolean;
    isReset?: boolean;
}

export function Form({fields, onSubmit, isLogin = false, isSubscribe = false, isReset = false}: FormProps) {
    const [formData, setFormData] = useState<Record<string, string>>({})
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit!(formData);
    };

    const handleCreateUser = async () => {
        const { name, email, password, age } = formData

        try {
            const user = await createUser(name, email, password, Number(age));
            console.log(user);

            router.push("/login")
            console.log("usuário cadastrado com sucesso");
            
        } catch(error) {
            console.log("erro ao tentar cadastrar usuário", error);
        }

        setFormData({})
    }

    const handleLogin = async () => {
        const email = formData.email;
        const password = formData.password;

        try {
            const response = await login(email, password).then(item => { return item } );
            const emailUser: string = response.user.email // if return something means that user email was found
        
            if(emailUser) {
                router.push("/dashboard")
            }
        } catch(error) {
            console.log("erro ao fazer login: ", error);
        }
    }

    return (
        <form className="rounded-md shadow-md p-6 space-y-4 min-h-[30rem] w-full md:w-[30rem] lg:w-[30rem] flex flex-col justify-center items-center bg-[#0000] shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
            <div>
                <Card>
                <CardHeader classes="flex flex-col justify-center items-center gap-2">
                    <div className="flex gap-1">
                        <Sprout size={48} color="green" />
                        <CardTitle classes="text-[2rem]">Nutrigen</CardTitle>
                    </div>
                    {isLogin ? (
                        <CardDescription classes="text-[1.5rem] mt-17 text-white-500">Log in</CardDescription>
                    ): isSubscribe ? (
                        <div>
                            <CardTitle classes="text-[1.5rem] mt-7 text-center">Create an account</CardTitle>
                            <CardDescription classes="text-[1.15rem] mt-10 text-center">Sign up to start using nutrigen</CardDescription>
                        </div>
                    ): (
                        <></>
                    )}
                </CardHeader>
                </Card>
            </div>

            {fields.map((field) => (
                <div key={field.name} className="w-full">
                    {field.label && (
                        <label htmlFor={field.name}>{field.name}</label>
                    )}
                    <input 
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder || field.label}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        className="mt-1 border border-gray-300 rounded-md px-3 py-2 w-full outline-gray-300 placeholder-black"
                    />
                </div>
            ))}

            <div className="w-full">
                {isLogin ? (
                    <div className="flex flex-col justify-center items-center w-full gap-4">
                        <div className="self-end">
                            <Link href="/reset-password" className="text-md text-end text-[#2e7d52] w-full">Forgot password?</Link>
                        </div>
                        <Button type="button" label="Log in" onClick={handleLogin} classes="bg-[#2e7d52] p-3 rounded-md w-[9rem] w-full lg:w-full text-white cursor-pointer" />

                        <p className="text-[#000] text-center w-full">Do not have an account? <Link href="/subscribe" className="text-[#2e7d52]">Sign up</Link> </p>
                    </div>
                ): isSubscribe ? (
                    <Button type="button" label="Sign Up" onClick={handleCreateUser} classes="bg-[#2e7d52] p-3 rounded-md w-[9rem] w-full lg:w-full text-white cursor-pointer" />  
                ): isReset ? (
                    <div className="grid">
                        <Button label="Reset Password" classes="bg-[#2e7d52] p-3 rounded-md w-[9rem] w-full lg:w-full text-white cursor-pointer" />
                        <Link href="/login" className="text-md text-center text-[#2e7d52] w-full mt-7">Back to log in</Link>
                    </div>
                ): (
                    <></>
                )}
            </div>
        </form>
    )
}