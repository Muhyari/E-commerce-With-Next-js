import axios from "axios"

type AxiosErrorResponse = {
    massage: string,
}

export const axiosErrorHandler = (error: unknown): string => {
    if(axios.isAxiosError(error) && error.response){
        return (error.response?.data as AxiosErrorResponse).massage
    }

    return "::CODE/RUNTIME ERROR => " + error;
}