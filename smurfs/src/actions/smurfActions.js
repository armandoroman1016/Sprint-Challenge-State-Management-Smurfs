import axios from 'axios'

export const FETCH_SMURFS_DATA_START = 'FETCH_SMURFS_DATA_START'
export const FETCH_SMURFS_DATA_SUCCESS = 'FETCH_SMURFS_DATA_SUCCESS'
export const FETCH_SMURFS_DATA_ERROR = 'FETCH_SMURFS_DATA_ERROR'

export const POST_SMURFS_DATA_START = 'POST_SMURFS_DATA_START'
export const POST_SMURFS_DATA_SUCCESS = 'POST_SMURFS_DATA_SUCCESS'
export const POST_SMURFS_DATA_ERROR = 'POST_SMURFS_DATA_ERROR'

 export const postData = ( values ) => {
    return dispatch => {
        dispatch({ type: POST_SMURFS_DATA_START, payload : values})
        axios
            .post('http://localhost:3333/smurfs', values)
            .then( res => {
                dispatch({ type : POST_SMURFS_DATA_SUCCESS, payload: values })
            })
            .catch( err => {
                dispatch({ type : POST_SMURFS_DATA_ERROR, payload: err.response })
            })
    }
}

export const getData = () => {
    return dispatch => {
        dispatch({ type : FETCH_SMURFS_DATA_START })
        axios
            .get('http://localhost:3333/smurfs')
            .then( res => {
                console.log(res)
                dispatch({ type : FETCH_SMURFS_DATA_SUCCESS, payload: res.data})
            })
            .catch( err => {
                dispatch({ type : FETCH_SMURFS_DATA_ERROR, payload: err.response})
            })
    }
}