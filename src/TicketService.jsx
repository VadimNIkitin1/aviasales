import cuid from 'cuid';

const _ticketApi = 'https://aviasales-test-api.kata.academy/tickets?';

const logoUrl = 'http://pics.avs.io/99/36';

export async function getSearchId() {
  try {
    const res = await fetch('https://aviasales-test-api.kata.academy/search');
    const data = await res.json();
    const id = data.searchId;
    return id;
  } catch (err) {
    console.log(err);
  }
  return null;
}

export async function getTickets(id) {
  const response = await fetch(`${_ticketApi}searchId=${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  const tickets = data.tickets.map((ticket) => {
    return { ...ticket, id: cuid(), logoUrl: `${logoUrl}/${ticket.carrier}.png` };
  });

  return { tickets, stop: data.stop };
}
