import constants from '../Constants/actionTypes'

var initialState = {
	purchasePosted: false,
    success: false,
    message: null,
	latitude: null,
	longitude: null
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);

    switch(action.type) {
        case constants.PURCHASE_POSTED:
            updated['success'] = action.success;
            updated['message'] = action.message;
			updated['latitude'] = action.latitude;
			updated['longitude'] = action.longitude;
			updated['purchasePosted'] = true;
            return updated;
			
		case constants.PURCHASE_RESET:
			updated['success'] = false;
			updated['message'] = null;
			updated['latitude'] = null;
			updated['longitude'] = null;
			updated['purchasePosted'] = false;
			return updated;

        default:
            return state;
    }
}