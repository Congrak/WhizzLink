export const getAllQR = async ({page, creatorId}: {page: number, creatorId: string}) => {
    
    const res = await fetch(`/api/qrs?page=${page}&creatorId=${creatorId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const data = await res.json();
    return data
}