import{
    FETCH_SMURFS_DATA_START,
    FETCH_SMURFS_DATA_SUCCESS,
    FETCH_SMURFS_DATA_ERROR,
    POST_SMURF_DATA_START,
    POST_SMURF_DATA_SUCCESS,
    POST_SMURF_DATA_ERROR,
} from '../actions'


const initialState = {
    smurfs : [],
    title : 'HELLLLLOOOOO',
    isLoading: false,
    error: '',
    isPosting: false
}

export const reducer = ( state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS_DATA_START:
            return{
                ...state,
                isLoading: true
            }
        case FETCH_SMURFS_DATA_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isLoading : false
            }
        case FETCH_SMURFS_DATA_ERROR:
            return{
                ...state, 
                err : action.payload
            }
        default:
            return state
    }
}