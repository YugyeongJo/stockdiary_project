/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals}) {
    if (locals.user) {
        return {
            user_profile: locals.user
        }
    }
}