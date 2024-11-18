function Register() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <form className="row g-3 bg-light p-4 rounded shadow mx-auto" style={{ maxWidth: '600px' }}>
                <h1 className="col-12 d-flex justify-content-center">Register</h1>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">First name</label>
                        <input type="text" className="form-control" id="inputName" required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputSurname" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="inputSurname" required/>
                    </div>
                </div>
                
                <div className="col-md-12">
                    <label htmlFor="inputUsername" className="form-label">Username</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control" id="inputUsername" required/>
                    </div>
                </div>

                <div className="col-md-12">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" required/>
                </div>

                <div className="col-md-12">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" required/>
                </div>

                <div className="col-md-12">
                    <label htmlFor="inputRepeatPassword" className="form-label">Repeat password</label>
                    <input type="password" className="form-control" id="inputRepeatPassword" required/>
                </div>
                
                <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </div>
            </form>
        </div>
    );
}


export default Register;