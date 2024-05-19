export const getAllLinks = async ({page,creatorId}: {page: number,creatorId: string}) => {

    const res = await fetch(`/api/links?page=${page}&creatorId=${creatorId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const data = await res.json();
    return data
}