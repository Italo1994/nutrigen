
interface ListProps<T = any> {
    title?: string;
    items: T[];
    renderItem?: (item: T) => React.ReactNode;
}

export function List({title, items, renderItem}: ListProps) {
    return (
        <div className="">
            <h4 className="font-bold mb-2">{title}</h4>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>   
                        <span className="pl-2">- {item}</span>    
                    </li>
                })
                }
            </ul>
        </div>
    )
}