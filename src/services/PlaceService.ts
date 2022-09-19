import axios from "axios";
import ApiResponse from "../models/ApiResponse";
import Place from "../models/Place";

export const getPlaceById = (id: string): Promise<ApiResponse<Place>> => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/${id}`)
            .then(response => {
                const {placeName, placeAddress, openingHours, currentlyOpen} = response.data;

                const place: Place = {
                    placeName,
                    placeAddress,
                    openingHours,
                    currentlyOpen
                };

                resolve(new ApiResponse<Place>(place));
            })
            .catch(error => reject(new ApiResponse<Place>(error.response.data.message || 'Unknown error')))
    });
}
