export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const data = await fetch("https://api.waifu.im/search/?many=true");
    
    return await data.json()

    // throw error(404, 'Not found');
}