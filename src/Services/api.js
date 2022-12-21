import { Endpoints } from '../utils/Endpoint'
import axios from 'axios'


export const getUsers = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.get(Endpoints.baseURL + Endpoints.users, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(async response => {
                // console.warn("getState", response)
                return response
            })
            resolve(res.data);
            } catch (error) {
            console.log({ error });
            reject(`${error.response.data.message}`);
        }
    });
}

export const getAlbum = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.get(Endpoints.baseURL + Endpoints.photos + id, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(async response => {
                // console.warn("getState", response)
                return response
            })
            resolve(res.data);
            } catch (error) {
            console.log({ error });
            reject(`${error.response.data.message}`);
        }
    });
}

export const getImages = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.get(Endpoints.baseURL + Endpoints.photos + id, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(async response => {
                // console.warn("getState", response)
                return response
            })
            resolve(res.data);
            } catch (error) {
            console.log({ error });
            reject(`${error.response.data.message}`);
        }
    });
}