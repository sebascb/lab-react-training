import { useState } from "react";

const LikeButton = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(0);
    const [plural, setPlural] = useState("s");

    const colors = ['purple','blue','green','yellow','orange','red'];

    const addLikes = () => {
        setCount(count + 1);
        if (count !== 0) {
            setPlural("s");
        } else {
            setPlural("");
        };

        if ((color >= 0) && (color <= 4)) {
            setColor(color + 1);
        } else {
            setColor(color - 5);
        };
    }

    return (
        <button className="likes" onClick={addLikes} style={{backgroundColor: colors[color]}}>{count} Like{plural}</button>
    )
}
export default LikeButton;
