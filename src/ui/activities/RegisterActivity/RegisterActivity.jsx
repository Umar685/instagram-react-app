import React from 'react';
import './RegisterActivity.scss';

class RegisterActivity extends React.Component {
    render() {
        return <div className={"register-activity"}>

            <div className="container login-card-container">

                <div className="login-card">
                    <div className="bg-img"></div>
                    <div className="bg-img-overlay"></div>

                    <div className="card-body">
                        <h1 className="heading">REGISTRATION FORM</h1>

                        <form className="login-form" action="" encType="multipart/form-data" method="post">
                            <div className="form-group mb-2">
                                <input className="form-control" type="text" placeholder="ENTER PHONE NUMBER OR EMAIL"
                                       name="email"/>
                            </div>
                            <div className="form-group mb-2">
                                <input className="form-control" type="text" placeholder="ENTER YOUR FULL NAME"
                                       name="fullname"/>
                            </div>
                            <div className="form-group mb-2">
                                <input className="form-control" type="text" placeholder="ENTER YOUR USER NAME"
                                       name="username"/>
                            </div>

                            <div className="form-group mb-2">
                                <input className="form-control" type="password" placeholder="ENTER YOUR PASSWORD"
                                       name="password"/>
                            </div>
                            <div className="form-group mb-2">
                                <input className="form-control" type="file" name="image"/>
                            </div>
                            <button type="submit" className="btn btn-success form-control btn-xlg submit-btn"
                                    name="login">SUBMIT
                            </button>
                        </form>

                        <div className="bottom-half">
                            <div className="or-container mb-3">
                                <div className="or-line mr-3"></div>

                                <div className="ml-3 or-line"></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
}

export default RegisterActivity;