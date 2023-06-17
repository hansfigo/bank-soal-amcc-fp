import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const data = await fetch("https://api.waifu.im/search/?included_tags=oppai&many=true");
    
    return await data.json()

    // throw error(404, 'Not found');
}