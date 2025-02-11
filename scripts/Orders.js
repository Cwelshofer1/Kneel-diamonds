export const orderPrice = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await fetchResponse.json()

    
    let ordersHTML = ""
    const ordersStringArray = orders.map(
        (order) => {
            const orderPrice = order.metal.price + order.style.price + order.size.price
            return `<div>Order# ${order.id} cost ${orderPrice.toFixed(2)}`

        }
    )
    ordersHTML += ordersStringArray.join("")
    return ordersHTML
}