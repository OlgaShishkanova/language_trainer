export const removePunctuation = (string: string) =>{
    return string.replace(/[.,!?-]/g, " ").trim().replace(/\s+/g, " ");
}
export const compareStrings = (string1: string, string2: string) => {
    return removePunctuation(string1) === removePunctuation(string2)
}