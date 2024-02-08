import  {writable} from 'svelte/store';

export const selectedArticle = writable()

export const setSessionData = (key: string, value: any) => {
    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
};

export const getSessionData = (key: string) => {
    if (typeof sessionStorage !== 'undefined') {
        const storedData = sessionStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
    }
    return null;
};