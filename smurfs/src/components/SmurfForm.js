import React from 'react';
import { Form, Field, withFormik } from 'formik';
import { postData } from '../actions'
import { connect } from 'react-redux'

const FormCreator = ( props ) => {

    return(
            <Form > 
                <h2>Add Your Smurf</h2>

                <Field type = 'text' placeholder = 'Name' name = 'name' className = 'input-field' data-testid = 'field'/>

                <Field type = 'age' placeholder = 'Age' name = 'age' className = 'input-field' data-testid = 'field'/> 
                
                <Field type = 'height' placeholder = 'Height' name = 'height' className = 'input-field' data-testid = 'field'/> 
                
                <button type = 'submit'>Submit</button>
            </Form>
    )
}

const SmurfedFormik = withFormik({

    mapPropsToValues({ name, age, height }){
        return {
        name : name || '',
        age : age || '',
        height : height | ''}
    },

    handleSubmit(values, props){
        
        const dataToPost = {
            name: values.name,
            age: values.age,
            height: values.height,
            id: Date.now()
        }

        props.props.postData(dataToPost)
    }

})(FormCreator)

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, { postData })(SmurfedFormik)