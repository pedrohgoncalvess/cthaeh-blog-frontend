import { redirect } from "@sveltejs/kit";

export const handle = async ({ event, resolve }) => {
    const access = event.cookies.get("access") === "true";

    if (!access && event.route.id?.toString().includes("data-garden/admin/menu")) {
        throw redirect(302, "/data-garden/admin");
    }

    const theme = event.cookies.get("siteTheme");

    const response = await resolve(event, {
        transformPageChunk: ({ html }) =>
            html.replace('data-theme=""', `data-theme="${theme}"`),
    });
    return response;
};