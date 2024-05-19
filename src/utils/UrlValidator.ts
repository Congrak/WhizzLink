export const validateUrl = (url: string) => {
    const urlPattern = new RegExp('^(ftp|http|https):\\/\\/[^ "]+\\.[a-zA-Z]{2,}(\\/\\S*)?$');

    return urlPattern.test(url);
}