import { styleId } from "./TransientState.js"

const handleStyleChange = (changeEvent) => {
    if(changeEvent.target.name === "style")
        styleId(parseInt(changeEvent.target.value))

}

export const styleOptions = async () => {
document.addEventListener("change", handleStyleChange)

    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let stylesHTML = ""
    
    const stylesStringArray = styles.map(
        (style) => {
        return `<div><input type='radio' name='style' value='${style.id}'/> ${style.style} </div>`
}
    )
     stylesHTML += stylesStringArray.join("")

    return stylesHTML
}




