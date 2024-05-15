import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {

    const data = await locals.pb.collection('stocklist').getFullList({});
    
    return {
        data
    };

}

