export const deleteItem = async ({id, creatorId, type}: { id: string, creatorId: string, type: "link" | "qr" }) => {
    const res = await fetch("/api/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, creatorId, type }),
    });
    const data = await res.json();
    return data;
} 