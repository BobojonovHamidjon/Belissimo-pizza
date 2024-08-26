import { useEffect, useState } from "react";

function useDimensions(){
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerWidth)

    function getWindowDimensions(){
        const {innerHeight: height, innerWidth: width} = window

        return {height, width}
    }

    useEffect(() => {
        function resizeEvent(){
            const {width, height} = getWindowDimensions()
            setHeight(height)
            setWidth(width)
        }

        window.addEventListener('resize', resizeEvent)

        return () => window.removeEventListener('resize',resizeEvent) 
    }, [])

    return {width, height}

}


export default useDimensions