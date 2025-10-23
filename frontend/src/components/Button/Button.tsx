
interface ButtonProps {
    label: string;
    classes?: string;
}

export function Button({label, classes}: ButtonProps) {
    return (
        <button className={`${classes}`}>
            {label}
        </button>
    )
}