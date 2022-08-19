import axios from 'axios'
import {createClient} from 'pexels'

const api = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        Authorization: '563492ad6f91700001000001f5569b7ea5044462802a35c55f55038d'
    }
})

export async function getImages(rote: string) {
   
    try {
        const response = await api.get(rote);
        return response.data;

    } catch (err: any) {
        return err
    }
}
