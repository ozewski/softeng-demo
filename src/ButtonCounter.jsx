import { useState } from "react";

export const ButtonCounter = () => {
    const [value, setValue] = useState(0);

    const onClick = () => {
        setValue(value + 1);
    }

    return (
        <div>
            <button
                onClick={onClick}
            >
                Click me!
            </button>
            <div>Number: {value}</div>
        </div>
    )
}