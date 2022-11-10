import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `immigration - ${title}`;
    }, [title])
}

export default useTitle;