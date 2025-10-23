import { Button } from "@/components/Button/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card/Card";
import { Menu } from "@/components/Menu/Menu";
import { Navbar } from "@/components/Navbar/Navbar";
import Image from "next/image";

import nutrigenBanner1 from '../../public/assets/banner1_nutrigen.png';

import { Dna, BarChart3, Utensils } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <main className="">
        <Navbar>
          <a href="#" className="font-bold">NUTRIGEN</a>
          <Menu 
            items={
              [
                {label: "Log in", href:"#"}
              ]
            }
          />
        </Navbar>

        <section className="grid grid-cols-1 md:grid-cols-2 md:pt-11 sm:pl-[3rem] md:pl-[4rem]">
            <div className="w-full flex justify-center items-center">
              <Card classes="w-full text-justify md:w-[40rem] md:min-h-[30rem]">
                <CardHeader classes="md:flex-col justify-center items-center mt-11">
                  <CardTitle classes="text-[2rem] lg:text-[3rem]">
                    Nutrition guided by real data from your body
                  </CardTitle>
                  <CardDescription classes="text-[1.5rem] mt-7">
                    Harness biometric, lifestyle, and clinical data to receive personalized, adaptive nutrition plans.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button label="Get started" classes="bg-[#009900] p-2 rounded-md md:w-[9rem] text-white font-bold cursor-pointer" />
                </CardContent>
              </Card>
            </div>
            <div className="mr-2 grid justify-center items-center">
              <Image src={nutrigenBanner1} width={400} height={400} alt="nutrigen banner" className="w-[30rem] h-[35rem]" />
            </div>
        </section>

        <section>
          <div className="flex md:justify-start lg:justify-center items-center sm:pl[3rem] md:pl-[4rem] w-full">
            <Card>
              <CardHeader>
                <CardTitle classes="text-[1.6rem] lg:text-[2rem]">
                  Personalized Recommendations
                </CardTitle>
                <CardDescription classes="text-[1.15rem] mt-1">
                  Receive nutrition plans to your unique biology, preferences and goals
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="grid sm:grid-cols-1 lg:grid-cols-3 sm:pl-[3rem] md:pl-[4rem] lg:pl-0">
          <div className="flex md:justify-start lg:justify-center items-center w-full">
            <Card classes="lg:w-[15rem]">
              <CardHeader>
                <Dna size={48} className="text-green-700" />
                <CardTitle classes="text-[1.2rem] lg:text-[1.2rem] mt-2">
                  Personalized Recommendations
                </CardTitle>
                <CardDescription classes="text-[1rem] mt-1">
                  Receive nutrition plans to your unique biology, preferences and goals
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="flex md:justify-start lg:justify-center items-center w-full">
            <Card classes="lg:w-[15rem]">
              <CardHeader>
                <BarChart3 size={48} className="text-green-700" />
                <CardTitle classes="text-[1.2rem] lg:text-[1.2rem] mt-2">
                  Insights from Health Data
                </CardTitle>
                <CardDescription classes="text-[1rem] mt-1">
                  Integrate and analyze your lab results, wearables and health records
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="flex md:justify-start lg:justify-center items-center w-full">
            <Card classes="lg:w-[15rem]">
              <CardHeader>
                <Utensils size={48} className="text-green-700" />
                <CardTitle classes="text-[1.2rem] lg:text-[1.2rem] mt-2">
                  Dynamic Meal Plans
                </CardTitle>
                <CardDescription classes="text-[1rem] mt-9">
                  Get meal plans that adapt in real-time as your data chan
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
