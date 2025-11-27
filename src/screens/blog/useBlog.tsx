import { useSelector } from "react-redux";

const useBlog = () => {

    const theme = useSelector((state: any) => state?.app?.theme || '#fff');

    return {
        theme
    }
}

export default useBlog;