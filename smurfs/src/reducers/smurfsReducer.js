import{
    FETCH_SMURFS_DATA_START,
    FETCH_SMURFS_DATA_SUCCESS,
    FETCH_SMURFS_DATA_ERROR,
    POST_SMURFS_DATA_START,
    POST_SMURFS_DATA_SUCCESS,
    POST_SMURFS_DATA_ERROR,
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
                isLoading : false,
                err: ''
            }
        case FETCH_SMURFS_DATA_ERROR:
            return{
                ...state, 
                err : action.payload
            }
        case POST_SMURFS_DATA_START:
            return{
                ...state,
                isPosting: true,
            }
        case POST_SMURFS_DATA_SUCCESS:
            return{
                ...state,
                isPosting: false,
                smurfs :  [ ...state.smurfs, action.payload ],
                err: ''
            }
        case POST_SMURFS_DATA_ERROR:
            return{
                ...state,
                err: action.payload
            } 
        default:
            return state
    }
}