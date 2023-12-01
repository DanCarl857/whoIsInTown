import axios from "axios"

export const getData = async (url: string) => {
    try {
        let response = await axios.get(`${url}`)
        return response.data
    } catch (err) {
        return {}
    }
}