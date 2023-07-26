import axios from 'axios';

export const getAllCountries = () => {
	return (dispatch) => {
		axios.get('https://restcountries.com/v3.1/all').then((res) => {
			dispatch({
				type: 'getAllCountries',
				payload: res.data,
			});
		});
	};
};

export default getAllCountries;
