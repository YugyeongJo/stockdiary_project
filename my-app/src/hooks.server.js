import { pb } from '$lib/pocketbase';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {

    // before response (서버 다녀오기 전에 행하고 싶은 것들)
    // event local에 포켓베이스 넣어두기
    event.locals.pb = pb;
    // load the store data from the request cookie string(tocken 정보 전달)
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    try {
        // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
        // login을 했다면 refresh 해라
        event.locals.pb.authStore.isValid && await event.locals.pb.collection('users').authRefresh();
    } catch (_) {
        // clear the auth store on failed refresh
        // erorr가 나면 clear
        event.locals.pb.authStore.clear();
    }

    // user 사용자 정보 저장하기
    event.locals.user = structuredClone(pb.authStore.model);

    const response = await resolve(event);

    // after response (서버 다녀온 후 행하고 싶은 것들)
    // send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

    return response;
}
