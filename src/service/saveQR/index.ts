export const saveQR = async (qr: string | undefined, url: string, creatorId: string) => {

    if (typeof qr === 'undefined') return console.error("QR code not found");

    const res = await fetch("/api/qr", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ qr, url, creatorId }),
    });

    const data = await res.json();

    return data;
    
}