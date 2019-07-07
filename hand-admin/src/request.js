import  axios from 'axios'

const ajax = axios.create({
    baseURL:'http://rap2api.taobao.org/app/mock/161562'
})

export const tableList = (url) => {
    return ajax.post(url)
}