import { useContext } from "react"
import { contextApi } from "./Context";

const useApi = () => {
    return useContext(contextApi);
}

export default useApi;