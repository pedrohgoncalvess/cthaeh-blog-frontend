import type {
    Articles
} from '../backend/interfaces.ts'
import {apiHost} from "./main.js";



export async function authUser(username:string, password:string): Promise<Boolean> {

    const request = await fetch(`${apiHost}/auth`,{
        method: 'GET',
        headers: {'Authorization':`Basic ${btoa(`${username}:${password}`)}`}
    });

    return request.status == 200;
}