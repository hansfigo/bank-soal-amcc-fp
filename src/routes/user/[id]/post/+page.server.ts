import { writeFileSync } from 'fs';


export const actions ={
    default : async ({request}) => {
        const formData = Object.fromEntries(await request.formData())

        const { fileToUpload } = formData as { fileToUpload: File };

        writeFileSync(`static/${fileToUpload.name}`, Buffer.from(await fileToUpload.arrayBuffer()));

        return { success : true}
    }
}