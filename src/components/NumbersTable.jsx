import React from "react";

const NumbersTable = ( {limit}) => {
    const numbersArray = [];
    for (let i = 0; i < limit; i += 1) {
        numbersArray[i] = i + 1;
    };

    const evenOrOdd = num => {
        let className="";
        if (num % 2 === 0) {
            className = " even"
        };
        return className;
    };

    return (
        <div className="numbersTable">
            {numbersArray.map(number => (
                <div key={number} className={`numberTable${evenOrOdd(number)}`}>{number}</div>
            ))}
        </div>
    )

}

export default NumbersTable;