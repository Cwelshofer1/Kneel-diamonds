import { sizeId } from "./TransientState.js"

const handleSizeChange = (changeEvent) => {
    if(changeEvent.target.name === "size") {
    sizeId(parseInt(changeEvent.target.value))
    }
}





export const sizeOptions = async () => {
    document.addEventListener("change", handleSizeChange)
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()
    let sizeHTML = ""

   const sizesStringArray = sizes.map(
    (size) => {
        return `<div><input type='radio' name='size' value='${size.id}'/> ${size.carets} </div>`
    }

   )
    sizeHTML += sizesStringArray.join("")
    return sizeHTML
}



