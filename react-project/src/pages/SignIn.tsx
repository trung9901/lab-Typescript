import React from 'react'

type Props = {}

const SignIn = (props: Props) => {
    return (
        <div className="container text-center">
            <form className="form-signin">
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width={72} height={72} />
                <h1 className="h3 mb-3 font-weight-normal">Dang nhap</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" defaultValue="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Dang nhap</button>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>
        </div>
    )
}

export default SignIn