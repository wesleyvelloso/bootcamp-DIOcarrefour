import React, { useState, useEffect } from 'react'

export default function IfoodCounter() {

    const [value, setValue] = useState(1)

    useEffect(() => {
        document.getElementById("moeda").innerHTML = 2.00 * value
    }, [value])

    function down() {
        if (value > 0)
            setValue(value - 1)
    }

    function up() {
        setValue(value + 1)
    }

    return ( <
        div > IfoodCounter < /div>
    )
}