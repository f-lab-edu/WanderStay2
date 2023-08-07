import httpCLinet from "@/src/utils/httpClient";
import {DestinationType} from "@/src/pages/api/destinations/destinations";

export const getDestinationsAPI = () => httpCLinet.get<DestinationType>("api/destinations/destinations");