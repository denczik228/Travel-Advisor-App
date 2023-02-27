import axios from 'axios';

export const getPlacesData = async (sw, ne) => {
    try {
       const {
         data: { data },
       } = await axios.get(process.env.REACT_APP_URL, {
         params: {
           bl_latitude: sw.lat,
           tr_latitude: ne.lat,
           bl_longitude: sw.lng,
           tr_longitude: ne.lng,
         },
         headers: {
           "X-RapidAPI-Key": process.env.REACT_APP_X_RapidAPI_Key,
           "X-RapidAPI-Host": process.env.REACT_APP_X_RapidAPI_Host,
         },
       }); 
        return data
    } catch (error) {
        console.log(error)
    }
}