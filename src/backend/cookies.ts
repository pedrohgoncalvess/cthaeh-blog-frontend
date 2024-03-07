export function getCookieValue(cookieName:string) {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');


        if (name === cookieName) {
            return decodeURIComponent(value);
        }
    }

    return null;
}


export function expireCookie(cookieName:string) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}