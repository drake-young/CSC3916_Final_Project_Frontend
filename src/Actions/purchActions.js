import actionTypes from '../Constants/actionTypes';
import runtimeEnv from '@mars/heroku-js-runtime-env';

function purchasePosted(success, message, latitude, longitude){
    return {
        type: actionTypes.PURCHASE_POSTED,
        success:success,
		message:message,
		latitude:latitude,
		longitude:longitude
    }
}

function resetUserPurchase()
{
	return {
		type: actionTypes.PURCHASE_RESET
	}
}

export function submitPurchase(data){
    const env = runtimeEnv();
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/purchase`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'})
            .then( (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then( (res) => {
                dispatch(purchasePosted(res.success, res.message, res.latitude, res.longitude));
            })
            .catch( (e) => console.log(e) );
    }
}


export function resetPurchase() {
	return dispatch => {
		dispatch(resetUserPurchase());
	}
}