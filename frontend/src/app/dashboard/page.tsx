"use client"

import { searchFood } from "@/api/connect-fat-secret";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/Card/Card";
import { Greetings } from "@/components/Greetings/Greetings";
import { List } from "@/components/List/List";
import { Meal } from "@/components/Meal/Meal";
import { Menu } from "@/components/Menu/Menu";
import { Navbar } from "@/components/Navbar/Navbar";
import { Progress } from "@/components/Progress/Progress";
import Link from "next/link";

import { PieChart, Pie, Cell, Label } from "recharts";

const data = [
    { name: "consumed", value: 75 },
    { name: "remaining", value: 25 }
]

const COLORS = ["#2563eb", "#e5e7eb"];

export default function Dashboard() {
    return (
        <main className="min-h-screen">
            <Navbar>
                <Link href="/" className="font-bold">Nutrigen</Link>
                <Menu 
                    items={
                        [
                            {label: "Panel", href: "/"},
                            {label: "Recipes", href: "/"},
                            {label: "Log out", href: "/"}
                        ]
                    }
                    classesContainer="gap-4"
                    classesItem="text-[#2e7d52] text-[1.1rem]"
                />
            </Navbar>

            <section className="pl-[2rem]">
                <div>
                    <Greetings name="Sarah" />
                </div>
            </section>

            <section className="grid lg:grid-cols-2 grid-cols-1 mt-2 py-4 lg:gap-4">
                <div className="grid lg:gap-7">
                    <div className="flex pl-3 shadow-[0_4px_15px_rgba(0,0,0,0.3)] w-[100%] lg:w-[100%] ml-2 bg-[#fff44]">
                        <Card classes="w-full">
                            <CardHeader classes="">
                                <CardTitle classes="mb-4">Daily Nutrition Summary</CardTitle>
                                <CardDescription classes="grid gap-3">
                                    <div className="flex items-center"> 
                                        <p className="text-lg font-bold">1,750 kcal</p>
                                        
                                    </div>
                                    <div className="grid items-center gap-1 my-1">
                                        <Progress value={75} />
                                        <div className="flex justify-between items-center">
                                            <span>82 g</span><span>75% of</span>
                                        </div>
                                    </div>
                                    <div className="grid items-center gap-1 my-1">
                                        <Progress value={22} />
                                        <div className="flex justify-between items-center">
                                            <span>Protein: 58 g</span> <span>22% of</span>
                                        </div> 
                                    </div>
                                    <div className="grid items-center gap-1">
                                        <Progress value={90} />
                                        <div className="flex justify-between items-center">
                                            <span>Fat: 50 g</span> <span>(60 g total target)</span>
                                        </div> 
                                    </div>
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <div className="">
                            <PieChart width={140} height={140}>
                                <Pie
                                    data={data}
                                    innerRadius={45}
                                    outerRadius={60}
                                    startAngle={90}
                                    endAngle={-270}
                                    dataKey="value"
                                >
                                    {data.map((_, i) => (
                                        <Cell key={i} fill={COLORS[i]} stroke="none" />
                                    ))}
                                    <Label
                                        value="430 carbs"
                                        position="center"
                                        
                                        style={{ fontSize: "15px", fontWeight: "600", fill: "#000" }}
                                    />
                                </Pie>
                            </PieChart>
                        </div>
                    </div>

                    <div className="flex pl-3 shadow-[0_4px_15px_rgba(0,0,0,0.3)] w-[100%] lg:w-[100%] ml-2 bg-[#00044]">
                        <div className="w-full">
                            <Card classes="w-full lg:h-[7rem]">
                                <CardHeader classes="">
                                    <div className="grid w-full mb-4">
                                        <div className="flex justify-between items-center w-full">
                                            <CardTitle classes="">What you have eaten</CardTitle>
                                            <a href="#">1339 kcal</a>
                                        </div>
                                        <div className="w-[70%] mt-4">
                                            <Progress value={50} />
                                        </div>
                                    </div>
                                    <CardDescription classes="grid">
                                        <p>Calorics inates</p>
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card classes="w-full">
                                <CardHeader classes="">
                                    <CardTitle classes="mb-1">Daily overview</CardTitle>
                                </CardHeader>
                                <CardDescription classes="grid gap-1">
                                    <div className="w-full grid grid-cols-1 gap-2 lg:gap-5 lg:grid-cols-3">
                                        <div className="grid items-center">
                                            <p>Weight: <span className="text-lg font-bold">145.2</span> lb</p>
                                            
                                        </div>
                                        <div className="grid lg:justify-center items-center">
                                            <p>BMI: <span className="text-cyan-500">Normal</span></p>
                                        </div>
                                        <div className="grid lg:justify-center items-center">
                                            <p>Sleep Rate: 7h 35 min</p>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <p className="font-bold">Great job meeting your protein target yesterday!</p>
                                    </div>
                                </CardDescription>
                            </Card>
                        </div>
                        
                    </div>
                </div>
                <div className="grid w-full mt-4 lg:mt-0 bg-[#fff44]">
                    <Meal />
                    <div className="flex justify-start items-center mt-5 shadow-[0_4px_15px_rgba(0,0,0,0.3)] h-[12rem] pl-2 pt-2">
                        <p className="font-bold">Great job meeting your protein target yesterday!</p>
                    </div>
                </div>
                <div>
                    
                </div>
            </section>
        </main>
    )
}