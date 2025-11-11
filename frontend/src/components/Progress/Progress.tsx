
interface PropsProgress {
    value: number;
    classesOut?: string;
    classesIn?: string;
}

function getColor(percent: number) {
    if(percent < 40) return "bg-red-500"
    if(percent < 80) return "bg-yellow-500"

    return "bg-green-600"
}

export function Progress({value, classesOut, classesIn}: PropsProgress) {
    const max = 100;
    const percent = (value / max) * 100;
    const color = getColor(percent);

    return (
        <div className={`w-full h-2 bg-gray-300 rounded-full`}>
            <div
                className={`h-2 rounded-full transition-all ${color}`}
                style={{width: `${percent}%` }}
            >
            </div>
        </div>
    )
}