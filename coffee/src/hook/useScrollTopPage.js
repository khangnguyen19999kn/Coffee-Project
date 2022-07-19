import { useEffect } from "react"

export const useScrollTopPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
}