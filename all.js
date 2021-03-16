const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const powerfulBrands = [
  "珍煮丹黑糖飲品專賣",
  "陳三鼎黑糖青蛙鮮奶創始店",
  "春水堂人文茶館 Chun Shui Tang",
  "樺達奶茶 Huada Milk Tea",
  "十杯手作茶飲",
  "郭姐茶坊",
  "廖媽媽珍珠奶茶",
  "Queenny葵米 珍珠飲品專售",
  "雙妃奶茶",
  "迷客夏綠光牧場主題飲品",
];
// Store listItems
const listItems = [];

let dragStarIndex;

createList();

// Insert list items into DOM
function createList() {
  [...powerfulBrands]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((company, index) => {
      console.log(company);
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
    <span class ="number">${index + 1}</span>
    <div class ="draggable" draggable="true">
        <p class="company-name">${company}</p>
        <i class="fas fa-grip-lines"></i>
    </div>
    `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}
