import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoLogin = this.demoLogin.bind(this)
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
            .then(() => this.props.history.push('/'));
    }

    demoLogin(e) {
        e.preventDefault();
        const user = {username: "demo_user", password: "demo123"}
        this.props.processForm(user)
            .then(() => this.props.history.push('/'));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => {
                    return <li key={`error-${i}`}>
                        {error}
                    </li>
                })}
            </ul>
        )
    }

    render () {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form">
                <h2 className='session-form-header'>{this.props.formType === 'login' ? 'Sign in' : 'Sign up'}</h2>
                        <p className="session-form-subheader">to continue to MeTube</p>
                    {this.renderErrors()}
                        <label className="login-input">
                            <input 
                                type="text" 
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="username"
                                className="login-input"
                            />
                        </label>
                        <label className="login-input">
                            <input 
                                type="password" 
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="password"
                                className="login-input"
                            />
                        </label>
                        <div className='buttons'>
                            {(this.props.formType==="login") ? <button className="demo-login" onClick={this.demoLogin}>Demo Login</button> : ''}
                            {(this.props.formType === "login") ? <input className="login-submit" type="submit" value={this.props.formType} /> : ''}
                        
                        </div>
                        {(this.props.formType !== "login") ?
                            <div className="signup-buttons">
                                <div className="switch-form">
                                {this.props.navLink}
                                </div>
                                <input className="signup-submit" type="submit" value={this.props.formType} />
                            </div> : 
                            <div className="switch-form">
                                {this.props.navLink}
                            </div> 
                            }
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;