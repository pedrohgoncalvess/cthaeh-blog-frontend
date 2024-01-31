import type {Actions} from "@sveltejs/kit";
import {redirect} from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const formData = await request.formData()
        const username = formData.get("username")
        const password = formData.get("password")
        if (username == "pedro" || password == "123") {
            cookies.set("access", "true", {path: "/", sameSite: "strict"})
            throw redirect(302, "admin/menu")
        }

        return {
            username,
            message: "Email or password is invalid"
        }
    },
}