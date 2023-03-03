import fetchEvent from "./modules/fetchEvent.js";
import renderEvent from "./modules/renderEvent.js";
import showEventDetail from "./modules/showEventDetail.js";

const eventData = await fetchEvent();

renderEvent(eventData);
showEventDetail(eventData);
