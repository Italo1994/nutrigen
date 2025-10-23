
interface MenuItem {
    label: string;
    href: string;
}

interface MenuProps {
    items: MenuItem[]
}

export function Menu({items}: MenuProps) {
    return (
        <nav>
            <ul className="w-full h-[4rem] flex justify-between items-center">
                {
                    items.map((item) => {
                        return (
                            <li>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}