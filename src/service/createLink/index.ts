export const createLink = async (url: string, creatorId: string) => {
  const res = await fetch("/api/shorted", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url, creatorId }),
  });

  const data = await res.json();

  return data;
};
