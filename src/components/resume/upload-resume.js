import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form';
import * as actions from '../../actions';

const renderInput = field => {
    const { input, type } = field;
    return (
        <div>
            <input {...input} type={type} className="form-control" />
        </div>
    );
}

class Signin extends Component {
    handleFormSubmit({ resume }) {
        console.log(resume);

        this.props.signinUser({ resume });
    }

    renderAlert() {
        const { errorMessage } = this.props;
        if (errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong>{errorMessage}
                </div>
            );
        }
    }
    

    render(){
        const { handleSubmit } = this.props;

        return (
            <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                
                <div className="form-group">
                    <label>File:</label>
                    <Field name="resume" 
                        type="file" component={renderInput} />
                </div>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Upload</button>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.error
     };
}

Signin = reduxForm({
 form: 'upload'
})(Signin);
export default connect(mapStateToProps, actions)(Signin);