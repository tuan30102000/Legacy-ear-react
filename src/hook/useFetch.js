import { useEffect, useState } from "react";

export default function useFetch(callback, callbackParam) {
    const [loadState, setloadState] = useState(true)
    const [data, setdata] = useState([])
    useEffect(() => {
        const getData = async function () {
            setloadState(true)
            try {
                const newData = await callback(callbackParam)
                setdata(newData)
                setloadState(false)

            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [/* callbackParam */])

    return { loadState, data }
}
