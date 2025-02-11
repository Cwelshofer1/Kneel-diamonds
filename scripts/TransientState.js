const transientState = {
    "metalId": 0,
    "styleId": 0,
    "sizeId" : 0
    
}

export const metalId = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const styleId = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}


export const sizeId = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const saveOrderSubmission = async () => {
    const postoptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postoptions)
    const customEvent = new CustomEvent("orderSubmitted")
   document.dispatchEvent(customEvent)
}