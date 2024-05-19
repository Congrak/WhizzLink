export const updateLink = async (
  id: string,
  creatorId: string,
  shorted: string,
  newShorted: string
) => {
  try {
    const res = await fetch("/api/updateLink", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, creatorId, shorted, newShorted }),
    });

    if (!res.ok) {
        const error = await res.text();
        return {
          error,
        };
      }

    const data = await res.json();

    return data;
  } catch (error) {
    return {
      error: "error.fetch",}
  }
};
