import type {Actions} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";
import {authUser} from "../../../requests/auth.js";
import {setSessionData} from "../../../stores/main.js";

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const formData = await request.formData()
        const username = formData.get("username")
        const password = formData.get("password")
        if (typeof username == "string" && typeof password == "string") {
            const isValidUser = await authUser(username, password)
            if (isValidUser) {
                setSessionData("auth", btoa(`${username}:${password}`))
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
}