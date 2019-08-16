import React from 'react';
import { Form, Field, withFormik } from 'formik';
import axios from 'axios'

const FormCreator = ( props ) => {

    const {addUserOrRecipe} = props
    const { touched } = props
    const { errors } = props
    const { values } = props

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
    }

})