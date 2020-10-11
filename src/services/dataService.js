import axios from 'axios'

var BACKEND_URL = process.env.VUE_APP_BACKEND_URL

export default class RestResource {
    search(searchDto) {
        return axios.post(`${BACKEND_URL}/api/v1/vehicle/search`, searchDto).then(r => {
           return r.data
        }).catch(err => {
            return { error: true, message: err.message };
        })
    }
}