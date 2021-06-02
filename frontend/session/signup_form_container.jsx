import { connect } from 'react-redux';
import { createNewUser } from '../actions/session';
import SessionForm from './session_form';
import React from 'react';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to='/login'>Log In Instead</Link>
    };
};

const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(createNewUser(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);