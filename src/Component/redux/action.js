import axios from "axios";

const getAllCountries = async () => {

    try {
        const res = await axios.get("https://restcountries.com/v3.1/all")
        const data = await res.data
        return ({
            type: "getAllCountries",
            payload: data

        })
    } catch (error) {
        console.log(error)
    }

}

export default getAllCountries