import axios from 'axios'

const api = axios.create({
    baseURL:
        'https://jsonplaceholder.typicode.com/'
})

export async function getPosts(rote: string) {
   
    try {
        const response = await api.get(rote);
        return response.data;

    } catch (err: any) {
        return err
    }
}
