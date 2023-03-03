const apikey = "aLGf7LIEfrlaEtpVXyO5Oj9InyDNM8gN";
const eventEndpoint = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apikey}&locale=*`;
const imageEndpoint = `https://app.ticketmaster.com/discovery/v2/events/{eventId}/images.json?apikey=${apikey}`;

export default async function fetchEvent() {
  const response = await fetch(eventEndpoint);
  const result = await response.json();

  return result?._embedded?.events?.map((event) => {
    return {
      name: event.name,
      id: event.id,
      venue: event._embedded?.venues?.[0]?.name,
      city: event._embedded?.venues?.[0].city?.name,
      img: event.images?.[6]?.url,
      date: event.dates?.start.localDate,
      url: event.url,
    };
  });
}
