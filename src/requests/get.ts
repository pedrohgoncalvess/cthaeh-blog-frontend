import type {Articles} from "../backend/interfaces.js";
import {apiHost} from "./main.js";

export async function getAllArticles():Promise<Articles> {
    const request = await fetch(`${apiHost}/articles`,{
        method: 'GET',
    });

    if (request.status !== 200) {
        throw new Error('Erro ao obter os artigos');
    }

    const responseBody = await request.json()

    const articles = responseBody as Articles

    return articles

}

export async function getArticlesByTag(tag:string) {
    const request = await fetch(`${apiHost}/articles?tag=${tag}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    });

    if (request.status != 200) {
        return Array<null>
    }

    const responseBody = await request.json()

    const articles = responseBody as Articles

    return articles
}