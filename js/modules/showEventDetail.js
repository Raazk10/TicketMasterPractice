export default function showEventDetail(events) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", showDetail);
  });

  function showDetail(event) {
    const eventId = event.currentTarget.dataset.eventId;
    const clickedEvent = events.find((event) => event.id === eventId);
    console.log("clicked card id:", eventId);

    // create a link element with the event id as a query string parameter
    const linkElement = document.createElement("a");
    linkElement.href = `event.html?id=${clickedEvent.id}`;

    const imageElement = document.createElement("img");
    imageElement.classList.add("event__image");
    imageElement.setAttribute("src", clickedEvent.img);

    const dateElement = document.createElement("p");
    dateElement.classList.add("event__date");
    dateElement.textContent = `date: ${clickedEvent.date}`;

    linkElement.appendChild(imageElement);
    linkElement.appendChild(dateElement);
    const eventContainer = document.querySelector(".event-detail-container");
    if (eventContainer) {
      eventContainer.appendChild(linkElement);
    } else {
      console.log("Could not find event container element.");
    }

    // redirect to the new page
    window.location.href = linkElement.href;
  }
}
