import {html, render} from 'https://unpkg.com/lit-html?module';

const pizzaMenuItems = [
  {
    name: "Nana Special",
    description: "Tomato, cheese, hot salami, mushroom, capsicum, shrimps, olives, chilli",
    prices: { small: 8.95, medium: 10.25, large: 11.95 }
  },
  {
    name: "American",
    description: "Tomato, cheese, ham, hot salami, onion",
    prices: { small: 7.95, medium: 9.25, large: 10.95 }
  },
  {
    name: "Aussie",
    description: "Tomato, cheese, ham, bacon, egg",
    prices: { small: 7.95, medium: 9.25, large: 10.95 }
  },
  {
    name: "Capricciosa",
    description: "Tomato, cheese, ham, mushrooms, olives, anchovies",
    prices: { small: 7.95, medium: 9.25, large: 10.95 }
  },
  {
    name: "Naples",
    description: "Tomato, cheese, olives, anchovies",
    prices: { small: 7.95, medium: 9.25, large: 10.95 }
  },
  {
    name: "Hawaiian",
    description: "Tomato, cheese, ham, pineapple",
    prices: { small: 7.95, medium: 9.25, large: 10.95 }
  },
  {
    name: "Margarita",
    description: "Tomato, cheese, cheese, cheese, oregano",
    prices: { small: 7.95, medium: 9.25, large: 10.95 }
  },
  {
    name: "Mexicana",
    description: "Tomato, cheese, hot salami, capsicum, chilli",
    prices: { small: 7.95, medium: 9.25, large: 10.95 }
  },
  {
    name: "Mushroom",
    description: "Tomato, cheese, mushroom",
    prices: { small: 7.95, medium: 9.25, large: 10.95 }
  },
  {
    name: "Vegetarian",
    description: "Tomato, cheese, mushroom, capsicum, onion, olives",
    prices: { small: 7.95, medium: 9.25, large: 10.95 }
  },
  {
    name: "Meat Lovers",
    description: "Tomato, cheese, ham, hot salami, bacon, barbeque sauce",
    prices: { small: 7.95, medium: 9.25, large: 10.95 }
  },
  {
    name: "Garlic Foccacia",
    description: "Garlic, cheese, cheese, cheese, oregano",
    prices: { small: 7.95, medium: 9.25, large: 10.95 }
  },
  {
    name: "Chicken Pizza",
    description: "Tomato, cheese, chicken, pineapple",
    prices: { small: 9.45, medium: 10.75, large: 12.45 }
  },
  {
    name: "Factory Special",
    description: "Double thin crusts, tomato, bacon, sweet red peppers, fresh basil, cheese, roasted garlic",
    prices: { small: 8.95, medium: 10.25, large: 11.95 }
  },
  {
    name: "Kilmore",
    description: "Tomato, bocconcini cheese, mozzarella cheese, sun dried tomato, eggplant, olives, garlic",
    prices: { small: 8.95, medium: 10.25, large: 11.95 }
  },
  {
    name: "Marinara",
    description: "Tomato, cheese, seafood mix, garlic, oregano",
    prices: { small: 8.95, medium: 10.25, large: 11.95 }
  },
  {
    name: "Super Special",
    description: "The lot, excluding egg and anchovies",
    prices: { small: 8.95, medium: 10.25, large: 11.95 }
  },
];

function pizzaMenuItemTemplate({ name, description, prices }) {
  return html`
    <tr>
      <td class="text-left">
        ${name}
        <br />
        ${description}
      </td>
      <td class="text-right">$${prices.small}</td>
      <td class="text-right">$${prices.medium}</td>
      <td class="text-right">$${prices.large}</td>
    </tr>
  `;
}

function pizzaMenuTemplate(items) {
  return html`
    <tbody>
      <tr>
        <th class="text-left">Pizza</th>
        <th class="text-right">Small</th>
        <th class="text-right">Medium</th>
        <th class="text-right">Large</th>
      </tr>
      ${items.map(pizzaMenuItemTemplate)}
    </tbody>
  `;
}

const pizzaMenuElement = document
  .getElementById("pizza-menu")
  .getElementsByTagName("table")[0];

render(pizzaMenuTemplate(pizzaMenuItems), pizzaMenuElement);
