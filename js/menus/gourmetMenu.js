import {html, render} from 'https://unpkg.com/lit-html?module';

const gourmetMenuItems = [
  {
    name: "Chicken Supremo",
    description: "Barbeque sauce base, extra chicken, diced bacon, extra cheese"
  },
  {
    name: "Megasawass",
    description: "Tomato, triple hot salami, double cheese, and heaps of sliced fresh chilli"
  },
  {
    name: "Pepperoni",
    description: "Tomato, heaps of pepperoni and extra cheese"
  },
  {
    name: "Chicken Satay",
    description: "Satay sauce base, extra chicken, pineapple, fresh basil, cheese, extra satay sauce on top"
  },
  {
    name: "Spaghetti Bolognese Pizza",
    description: "Tomato, double spaghetti and bolognese sauce, cheese"
  },
  {
    name: "Tunza Meat",
    description: "Tomato, hot salami, ham, bacon, sausage, cheese, dollops of bolognese sauce"
  },
  {
    name: "Dan's Garlic Bread",
    description: "Garlic bread filled with hot salami and sprinkled with mozzarella cheese"
  },
];

function gourmetMenuItemTemplate({ name, description }) {
  return html`
    <tr>
      <td class="text-left">
        ${name}
        <br />
        ${description}
      </td>
    </tr>
  `;
}

function gourmetMenuTemplate(items) {
  return html`
    <tbody>
      ${items.map(gourmetMenuItemTemplate)}
    </tbody>
  `;
}

const gourmetMenuElement = document
  .getElementById("gourmet-menu")
  .getElementsByTagName("table")[0];

render(gourmetMenuTemplate(gourmetMenuItems), gourmetMenuElement);
