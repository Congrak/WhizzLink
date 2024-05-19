export const handleDownload = (qrURL: string): void => {
  const image = new Image();
  image.src = qrURL;

  image.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(image, 0, 0, 400, 400);
      const resizedDataUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = resizedDataUrl;
      link.download = "QR_Code.png";
      link.click();
    }
  };
};