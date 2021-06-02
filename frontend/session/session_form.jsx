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
        this.props.clearErrors;
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
                <h2>{this.props.formType}!</h2>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to MeTube!
                    <br />
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div className="login-form">
                        <label>
                            <input 
                                type="text" 
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="username"
                                className="login-input"
                            />
                        </label>
                        <label>
                            <input 
                                type="password" 
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="password"
                                className="login-input"
                            />
                        </label>
                        <input className="session-submit" type="submit" value={this.props.formType}/>
                        {(this.props.formType==="login") ? <button className="demo-login" onClick={this.demoLogin}>Demo Login</button> : ''}
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;