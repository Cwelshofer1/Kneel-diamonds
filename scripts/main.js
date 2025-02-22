import { metalOptions } from "./MetalOptions.js";
import { sizeOptions } from "./SizeOptions.js";
import { styleOptions } from "./StyleOptions.js";
import { saveOrder } from "./PlaceOrder.js";
import { orderPrice } from "./Orders.js";

const container = document.querySelector("#container")

const render = async () => {

    const metalOptionsHTML = await metalOptions()
    const sizeOptionsHTML = await sizeOptions()
    const styleOptionsHTML = await styleOptions()
    const saveOrderHTML = await saveOrder()
    const ordersHTML = await orderPrice()

    const kneelHTML = `
    <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${saveOrderHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersHTML}

        </article>
    `
container.innerHTML = kneelHTML
}

document.addEventListener("orderSubmitted", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})

render()




