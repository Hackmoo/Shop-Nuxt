import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://fakestoreapi.com'
})

export default axios