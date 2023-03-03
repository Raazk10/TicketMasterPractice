export default function renderEvent(events) {
  const ulContainer = document.querySelector(".ul-container");
  console.log("ulContainer:", ulContainer);
  events.forEach((event) => {
    const createElement = document.createElement("div");
    createElement.classList.add("card");
    createElement.dataset.eventId = event.id;

    const imageElement = document.createElement("img");
    imageElement.classList.add("card__image");
    imageElement.src = event.image;
    createElement.appendChild(imageElement);

    const titleElement = document.createElement("h2");
    titleElement.classList.add("card__title");
    titleElement.textContent = event.name;
    createElement.appendChild(titleElement);

    const venueElement = document.createElement("p");
    venueElement.classList.add("card__venue");
    venueElement.textContent = event.venue;
    createElement.appendChild(venueElement);

    ulContainer.appendChild(createElement);
  });
}
