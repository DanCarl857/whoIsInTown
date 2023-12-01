import axios from "axios"

export const getData = async (url: string) => {
    try {
        let response = await axios.get(`${url}`);
        return response.data
    } catch (err) {
        // When no artist is found, nothing should be showing on the artist metadata
        return {}
    }
}