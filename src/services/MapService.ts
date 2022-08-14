import { Apis } from "../constants/Apis";
import { fetchService } from './service';

const GenerateRandomLocations: (data: any) => Promise<{ data: any, status: number }> = async (data) => {
    return fetchService({
        url: Apis.GENERATE_RANDOM_LOCATIONS, method: "POST",
        body: data
    })
}

export { GenerateRandomLocations }