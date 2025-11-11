
interface ListProps {
    title?: string;
    items: string[];
}

export function List({title, items}: ListProps) {
    return (
        <div className="">
            <h4 className="font-bold mb-2">{title}</h4>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>
                        <span>icon</span> <span>{item}</span>
                    </li>
                })
                }
            </ul>
        </div>
    )
}