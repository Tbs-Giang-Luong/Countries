import axios from "axios";

const Regions = () => {


    const handleApi = async () => {
        try {
            const response = await axios.get('/user?ID=12345');
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    handleApi()
};

export default Regions;
