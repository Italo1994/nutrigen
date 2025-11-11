
interface ButtonProps {
    label: string;
    type?: "submit" | "reset" | "button"
    classes?: string;
    onClick?: () => void
}

export function Button({label, type, classes, onClick}: ButtonProps) {
    return (
        <button type={type} className={`${classes}`} onClick={onClick}>
            {label}
        </button>
    )
}