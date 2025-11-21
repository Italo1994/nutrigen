import { ReactNode } from "react"

interface CardProps {
    children?: ReactNode;
    classes?: string; 
}

export function Card({ children, classes }: CardProps) {
    return (
        <div className={`min-w-[15rem] min-h-[5rem] pl-4 p-2 ${classes}`}>
            {children}
        </div>
    )
}

export function CardHeader({ children, classes }: CardProps) {
    return (
        <div className={`w-full mb-2 pb-2 ${classes}`}>
            {children}
        </div>
    )
}

export function CardTitle({ children, classes }: CardProps) {
    return (
        <h2 className={`text-lg ${classes} font-semibold`}>{children}</h2>
    )
}

export function CardDescription({ children, classes }: CardProps) {
    return (
        <div className={`text-sm ${classes}`}>
            {children}
        </div>
    )
}

export function CardContent({ children }: CardProps) {
    return (
        <div className="py-2">
            {children}
        </div>
    )
}

export function CardFooter({ children }: CardProps) {
    return (
        <div className="mt-2 pt-2">
            {children}
        </div>
    )
}