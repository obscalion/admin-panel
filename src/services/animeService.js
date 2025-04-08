const API_URL = "http://localhost:3001/anime";

export const getAnimeList = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const addAnime = async (anime) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(anime),
  });
  return await res.json();
};

export const updateAnime = async (id, anime) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(anime),
  });
  return await res.json();
};

export const deleteAnime = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
