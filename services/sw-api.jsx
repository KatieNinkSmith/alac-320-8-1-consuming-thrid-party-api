export const getAllStarships = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch starships. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching starships:", err.message || err);
    throw err;
  }
};
