import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const data = await locals.pb.collection('stocklist').find(); // PocketBase 컬렉션 이름에 맞게 수정
    return {
        props: {
            stockData: data
        }
    };
}
