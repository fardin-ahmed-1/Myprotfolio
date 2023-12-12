import axiosSecure from "."

export const getportfolios = async() =>{
    const {data}=await axiosSecure.get('/allportfolios')
    return data
}