import { metalOptions } from "./MetalOptions.js";
import { sizeOptions } from "./SizeOptions.js";

const container = document.querySelector("#container")

const render = async () => {

    const metalOptionsHTML = await metalOptions()
    const sizeOptionsHTML = await sizeOptions()

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
            </section>
        </article>

        <article class="order">

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `
container.innerHTML = kneelHTML
}
render()




