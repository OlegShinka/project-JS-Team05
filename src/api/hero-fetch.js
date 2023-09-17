async function getEvent() {
  const response = await fetch(
    'https://tasty-treats-backend.p.goit.global/api/events'
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}
export { getEvent };
