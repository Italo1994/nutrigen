import { useEffect, useState } from "react";
import { Button } from "../Button/Button"
import { Card, CardDescription, CardHeader, CardTitle } from "../Card/Card"
import { List } from "../List/List"
import { searchFood } from "@/api/connect-fat-secret";
import axios from "axios";

interface FoodData {
  name: string;
  calories: number;
  carbs: number;
  fat: number;
  ingredients: string[]
}

export function Meal() {
    const date = new Date()
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const [foods, setFoods] = useState<FoodData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFoods() {
        try {
            const response = await searchFood();
            console.log("data ", response)
            //const results = data?.foods?.food?.map((item: any) => item.food_name) || [];
            setFoods(response);
        } catch (err) {
            console.error("Erro ao carregar alimentos:", err);
        } finally {
            setLoading(false);
        }
        }

        fetchFoods();
    }, []);

    const meal = foods.map(item => { return item})
    console.log("meal ", meal)
  

    return (
        <div className="shadow-[0_4px_15px_rgba(0,0,0,0.3)] p-2 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="h-[10rem]">
                    something
                </div>
                <div className="lg:col-span-2">
                    {foods.map(item => {
                        return (
                            <Card classes="w-full">
                                <CardHeader classes="grid gap-7 pl-2 w-full">
                                    <span className="">{day}/{month}/{year}</span>
                                    <CardTitle classes="w-full">
                                        {item.name}
                                    </CardTitle>
                                    <CardDescription classes="flex gap-15 pr-4 w-full">
                                        <span>calories: {item.calories}</span>
                                        <span>carbs: {item.carbs}</span>
                                        <span>fat: {item.fat}</span>
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        )
                    })[0]}
                </div>
            </div>
            <div>
                <List 
                    title="ingredients"
                    items={foods.length ? foods.map(f => f.ingredients)[0] : ["no foods found"]}
                    
                />
                <div className="flex justify-between pr-5 mt-7 md:mt-10 lg:mt-15">
                    <Button label="Substitute..." classes="cursor-pointer font-bold" />
                    <Button label="View Recipe >" classes="cursor-pointer font-bold text-blue-400" />
                </div>
            </div>
        </div>
    )
}