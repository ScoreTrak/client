import {useLocalStorage} from "react-use";

export default function useToken() {
    return useLocalStorage<string>(`${import.meta.env.ST_LOCAL_STORAGE_PREFIX ?? 'st_'}jwt-token`)
}