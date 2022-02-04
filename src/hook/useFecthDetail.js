import { useEffect, useState } from "react";
export default function useFecthDetail(callback,id) {
    const [data, setdata] = useState({})
    const [loadState, setloadState] = useState(true)
    useEffect(() => {
        (async function () {
            setloadState(true)
            try {
                const newData = await callback(id)
                setdata(newData)
                setloadState(false)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [id])

    return { data, loadState }
}