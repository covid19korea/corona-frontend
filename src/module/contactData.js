import { createAction, handleActions } from 'redux-actions'

const GET_CONTACT_DATA = "contactData/GET_CONTACT_DATA";

export const getContact = createAction(GET_CONTACT_DATA);

const initialState = {
    contact: false,
}


const contactData = handleActions(
    {
        [GET_CONTACT_DATA]: (state, { payload: contact }) => ({
            ...state,
            contact,
        }),
    },
    initialState,
)

export default contactData;