import {commonAPI} from "./commonAPI"
import {serverURL} from "./serverURL"

// api to upload video  

export const uploadAllVideo = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

//api to get all video

export const getAllVideos = async()=>{
   return await commonAPI('GET',`${serverURL}/videos`,"")
}

//api to delete a video

export const deleteVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//add watch History

export const viewHistory = async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

//to get data from the history

export const getAllHistory = async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

//api to delete a history

export const deleteHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

// api to category

export const addCategory = async(addDetails)=>{
    return await commonAPI('POST',`${serverURL}/category`,addDetails)
}

// api to get all category

export const getAllCategory = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
}

// api to get a video 

export const getAVideo = async(id)=>{
    return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

// api call to update the category
export const updateCategory = async(id, addDetails)=>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,addDetails)
}