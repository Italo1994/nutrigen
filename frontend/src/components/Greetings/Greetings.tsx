
interface GreetingsProps {
    name: string;
}

export function Greetings({name}: GreetingsProps) {
    const date = new Date();
    const hours = date.getHours();

    return (
        <>
            {hours >= 0 && hours < 12 ? (
                <h3 className="text-[2rem]">Good morning, {name}</h3>
            ): hours >= 12 && hours < 18 ? (
                <h3 className="text-[2rem]">Good afternoon, {name}</h3>
            ): hours >= 18 && hours <= 23 ?  (
                <h3 className="text-[2rem]">Good night, {name}</h3>
            ): (
                <></>
            )
            }
        </>
    )
}