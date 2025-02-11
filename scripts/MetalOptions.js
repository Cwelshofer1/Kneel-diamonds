import { metalId } from "./TransientState.js"

const handleMetalChange = (changeEvent) =>{
    if(changeEvent.target.name === "metal") {
    metalId(parseInt(changeEvent.target.value))
    }
}



export const metalOptions = async () => {
    document.addEventListener("change", handleMetalChange)

    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

        let metalsHTML = ""
        const metalsStringArray = metals.map(
            (metal) => {
                return `<div><input type='radio' name='metal' value='${metal.id}'/> ${metal.metal} </div>`
            }
        )
        metalsHTML += metalsStringArray.join("")
  
    return metalsHTML
}

