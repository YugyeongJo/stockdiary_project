import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ locals, request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        
        try {
            await locals.pb.collection('stocklist').create(data);
        } catch (e) {
            console.error(e);
            throw e;
        }

        throw redirect(303, '/stocklist');
    }
};