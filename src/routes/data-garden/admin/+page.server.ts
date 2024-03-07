import {authUser} from "../../../requests/auth.js";
import {redirect} from "@sveltejs/kit";

export const actions = {
        default: async ({ cookies, request }) => {
            const formData = await request.formData()
            const username = formData.get("username")
            const password = formData.get("password")
            if (typeof username == "string" && typeof password == "string") {
                const [token, refreshToken] = await authUser(username, password)
                if (token != null && refreshToken != null) {
                    cookies.set("auth_token", token.token, {path: "/", sameSite: "strict"})
                    cookies.set("auth_token_expiration", token.expiration_time, {path: "/", sameSite: "strict"})
                    cookies.set("access", "true", {path: "/", sameSite: "strict"})
                    throw redirect(302, "admin/menu")
                } else {
                    return {
                        username,
                        message: "Email or password is invalid"
                    }
                }
            }
        },
    // logout: async ({ request, cookies }) => {
    //     // TODO:
    // },
}