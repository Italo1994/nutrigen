
interface MenuItem {
    label: string;
    href: string;
}

interface MenuProps {
    items: MenuItem[];
    classesContainer?: string;
    classesItem?: string;
}

export function Menu({items, classesContainer, classesItem}: MenuProps) {
    return (
        <nav>
            <ul className={`w-full h-[4rem] flex justify-between items-center ${classesContainer}`}>
                {
                    items.map((item, index) => {
                        return (
                            <li key={index} className={`${classesItem}`}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}