import { axiosPrivateInstance } from ".";
import { RequestListDto } from "../utilities/models";
import { AxiosResponse } from "axios";

const getRequestList = (): Promise<AxiosResponse<RequestListDto[]>> => {
    return axiosPrivateInstance.get('/api/requests')
}

export const requestService = {
    getRequestList
}