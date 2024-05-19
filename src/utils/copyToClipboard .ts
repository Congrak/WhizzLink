export const CopyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("")
  } catch (error) {
    console.error("Faild copy", error)
  }
};
