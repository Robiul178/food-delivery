import { useEffect, useState } from "react"


const useFood = () => {
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch('https://pacific-cove-53174.herokuapp.com/food')
            .then(res => res.json())
            .then(data => setFood(data))
    })


    return [

        food, setFood

    ]
}

export default useFood;