import type {
    Articles
} from './interfaces.ts'

const apiHost: string = "http://localhost:8080";

export async function authUser(username:string, password:string): Promise<Boolean> {
    const encode = (str: string):string => Buffer.from(str, 'binary').toString('base64')
    const request = await fetch(`${apiHost}/auth`,{
        method: 'GET',
        headers: {'Authorization':`Basic ${btoa(`${username}:${password}`)}`}
    });

    return request.status == 200;
}

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