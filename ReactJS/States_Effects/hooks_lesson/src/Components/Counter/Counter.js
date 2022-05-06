function Counter(){
    let quantity =10;

    function upQuantity(){
        quantity += 1;
        document.getElementById("counter-box").innerHTML = quantity;
    }

    return(
        <>
            <h1 id="counter-box"> {quantity} </h1>
            <button onClick={upQuantity}> Add </button>
        </>
    )
}

export default Counter;