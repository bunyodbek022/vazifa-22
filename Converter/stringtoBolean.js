export function toBoolean(str) {
    if (typeof str !== "string") return Boolean(str);
    str = str.trim().toLowerCase();
    return str === "true" || str === "1";
}
