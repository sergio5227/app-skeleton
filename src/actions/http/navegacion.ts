import axios from "../config";


export const getDireccion = async (origin: any, destination: any, apiKey: string): Promise<any> => {
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.lat},${destination.lng}&key=${apiKey}&mode=driving`
        );
        return response?.data;
    } catch (error) {
        const promise = new Promise((_, reject) => reject(error));
        return promise;
    }
};