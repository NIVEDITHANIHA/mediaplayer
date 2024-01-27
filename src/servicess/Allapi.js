import CommonApi from "./CommonApi"
import { serviceUrl } from "./Serviceurl"



export const uploadVideos = async (reqbody) => {
    return await CommonApi('POST', `${serviceUrl}/video`, reqbody)

}


export const getVideos = async () => {
    return await CommonApi('GET', `${serviceUrl}/video`, "")
}

export const deleteVideos = async (id) => {
    return await CommonApi('DELETE', `${serviceUrl}/video/${id}`, {})
}

export const addHistory = async (historyBody) => {
    return await CommonApi('POST', `${serviceUrl}/history`, historyBody)

}
export const getHistory = async () => {
    return await CommonApi('GET', `${serviceUrl}/history`, "")
}

export const deleteHistory = async (id) => {
    return await CommonApi('DELETE', `${serviceUrl}/history/${id}`, {})
}

export const addCategory = async (categoryBody) => {
    return await CommonApi('POST', `${serviceUrl}/category`, categoryBody)

}


export const getCategories = async () => {
    return await CommonApi('GET', `${serviceUrl}/category`, '')
}


export const  deleteCategories = async (id)=>{
    return await CommonApi('DELETE',`${serviceUrl}/category/${id}`,{})
}

export const getVideosId = async (id) => {
    return await CommonApi('GET', `${serviceUrl}/video/${id}`, "")
}

export const updateCategories = async(id,categorybody)=>{
    return await CommonApi('PUT',`${serviceUrl}/category/${id}`,categorybody)
}