import QRCode  from "qrcode";
export const createQR = async (url: string) => {
    try {
      const res = await QRCode.toDataURL(url).then((url) => {
        return url
      })
      return res
      }catch(err){
      console.error("Error creating QR code:", err)
    }
  }