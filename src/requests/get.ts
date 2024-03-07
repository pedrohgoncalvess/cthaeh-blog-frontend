import type {Articles} from "../backend/interfaces/interfaces.js";
import {apiHost} from "./main.js";
import {getCookieValue} from "../backend/cookies.js";

export async function getAllArticles(authenticated:boolean=false):Promise<Articles> {

    let request

    console.log(getCookieValue("access"))

    if (!authenticated) {
        request = await fetch(`${apiHost}/articles`, {
            method: 'GET',
        });
    } else {
        request = await fetch(`${apiHost}/articles`, {
            method: 'GET',
            headers: {'Authorization':`Basic ${getCookieValue("auth")}`}
        });
    }


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