import { useState } from 'react';
let quantity = 10;

function SmartCounter() {

    // returns array
    // Stateful variable
    // Function 'hooked' to the variable. Update the value

    const [quantity, upQuantity] = useState(1);

    return ( <
        >
        <
        h1 > { quantity } < /h1> <
        button onClick = {
            () => upQuantity(quantity + 1)
        } > ADD < /button> < /
        >
    );
}

export default SmartCounter;