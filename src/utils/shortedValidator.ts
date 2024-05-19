export const validateShorted = (shorted: string) => {
    const shortedPattern = new RegExp("^[a-zA-Z0-9]+$");
    return shortedPattern.test(shorted);
}