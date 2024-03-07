import {apiHost} from "./main.js";
import type {RefreshToken, Token} from "../backend/interfaces/auth.js";


export async function authUser(username:string, password:string): Promise<[Token | null, RefreshToken | null]> {

    const request = await fetch(`${apiHost}/auth`,{
        method: 'POST',
        body: JSON.stringify(
            {
                "username":username,
                "password":password
            }
        ),
        headers: {"Content-Type": "application/json"}
    });

    if (request.status == 200) {
        const jsonResponse = await request.json()
        const token = jsonResponse['auth_token'] as Token
        const refreshToken = jsonResponse['refresh_token'] as RefreshToken
        return [token, refreshToken]
    }

    return [null, null]
}