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

export async function getAllTickets(id) {
  const result = [];
  try {
    const response = await fetch(`${_ticketApi}searchId=${id}`);
    const data = await response.json();
    if (data.stop === false) {
      result.push(data.tickets);
      result.push(...(await getAllTickets(id)));
    } else {
      return result;
    }
  } catch (err) {
    result.push(...(await getAllTickets(id)));
    console.log(err);
  }
  return result;
}
