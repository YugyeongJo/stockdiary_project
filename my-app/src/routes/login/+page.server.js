import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    if (locals.pb.authStore.isValid) {
        throw redirect(303, '/stocklist/write');
    }
}


/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ locals, request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        
        try {
            const email = data.email.toString();
            const password = data.password.toString();
            await locals.pb.collection('users').authWithPassword(email, password);
        } catch (e) {
            console.error(e);
            throw e;
        }

        throw redirect(303, '/');
    }
};