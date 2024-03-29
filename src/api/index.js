import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
       const {
         data: { data },
       } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
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
      //console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}