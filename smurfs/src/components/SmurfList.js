import React from "react";
import "./App.css";
import { connect } from 'react-redux'
import { getData } from '../actions'

const SmurfList = props => {
    return(
        <div>
        <button onClick = {props.getData}>Click Here To See The Smurfs</button>
        {props.smurfs.map(smurf => {
            return ( 
                <div key = {smurf.id}>
                    <h3>{smurf.name}</h3>
                    <h4>{smurf.age}</h4>
                    <h4>{smurf.height}</h4>
                </div>)
        })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs : state.smurfs
    }
}

export default connect(mapStateToProps, { getData })(SmurfList) 