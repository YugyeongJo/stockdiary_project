<<<<<<< HEAD
=======
// place files you want to import through the `$lib` alias in this folder.
>>>>>>> 1e17e289df183efff772d020d89406cce2a18882
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import PocketBase from 'pocketbase';

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL);