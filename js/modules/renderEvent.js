const ulContainer = document.querySelector(".ul-container");
const eventContainer = document.querySelector(".event-container");

export default function renderEvent(events) {
  events.forEach((event) => {
    const createElement = document.createElement("div");
    createElement.classList.add("card");
    // set the data-eventId attribute
    createElement.dataset.eventId = event.id;
    const liElement = document.createElement("li");
    liElement.textContent = `event: ${event.name} city: ${event.city} `;

    createElement.appendChild(liElement);
    ulContainer.appendChild(createElement);
  });
}
