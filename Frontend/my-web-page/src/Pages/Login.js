function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <form className="row g-3 bg-light p-4 rounded shadow "> 
            <h1 className="col-12 d-flex justify-content-center">Login</h1>  
                <div className="col-md-11">
                    <label htmlFor="inputUsername" className="form-label">Username</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control" id="inputUsername" />
                    </div>
                </div>

                <div className="col-md-11">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" />
                </div>

                <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary w-20">Sign in</button>
                </div>
            </form>
        </div>
    );
}

export default Login;