export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")


    return optionsHTML
}