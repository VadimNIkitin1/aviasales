const _ticketApi = 'https://aviasales-test-api.kata.academy/tickets?';

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

  return await response.json();
}
