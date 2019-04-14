import {html, render} from 'https://unpkg.com/lit-html?module';

const pastaMenuItems = [
  {
    name: "Marinara",
    description: "Seafood cooked in a special wine and cream tomato sauce and parmesan cheese",
    price: 10.95
  },
  {
    name: "Bolognese",
    description: "Tasty traditional minced beef sauce with parmesan cheese",
    price: 9.95
  },
  {
    name: "Roma",
    description: "Mushroom with a touch of cream with a tomato or bolognese sauce",
    price: 9.95
  },
  {
    name: "Matriciana",
    description: "Tomato, hot salami, capsicum, chilli, olives, onion",
    price: 9.95
  },
  {
    name: "Carbonara",
    description: "Bacon, cream, egg, onion, parmesan cheese",
    price: 9.95
  },
  {
    name: "Napolitana",
    description: "",
    price: 9.95
  },
  {
    name: "Mushroom",
    description: "Accompanied with a rich creamy mushroom sauce",
    price: 9.95
  },
  {
    name: "Lasagna",
    description: "Traditionally served with layers of cheese sauce, meat and boiled egg",
    price: 10.95
  },
  {
    name: "Chicken & Mushroom",
    description: "Rich creamy mushroom sauce served with fresh chicken",
    price: 10.95
  },
];

function pastaMenuItemTemplate({ name, description, price }) {
  return html`
    <tr>
      <td class="text-left">
        ${name}
        <br />
        ${description}
      </td>
      <td class="text-right">$${price}</td>
    </tr>
  `;
}

function pastaMenuTemplate(items) {
  return html`
    <tbody>
      <tr>
        <th class="text-left">Pasta</th>
        <th class="text-right">Extra Large</th>
      </tr>
      ${items.map(pastaMenuItemTemplate)}
    </tbody>
  `;
}

const pastaMenuElement = document
  .getElementById("pasta-menu")
  .getElementsByTagName("table")[0];

render(pastaMenuTemplate(pastaMenuItems), pastaMenuElement);
