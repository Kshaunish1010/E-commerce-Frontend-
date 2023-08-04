import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import CustomInputs from '../components/CustomInputs'
const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <div className='login-wrapper homer-wrapper-32 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center mb-3'>Login</h3>
              <form className='d-flex flex-column gap-15'>
                  <div className='mt-1'>
                    <CustomInputs
                      type='email'
                      name='email'
                      placeholder='Email'
                      className='form-control' />
                  </div>
                  <div className='mt-1'>
                    <CustomInputs
                      type='password'
                      name='password'
                      placeholder='Password'
                      className='form-control' />
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                      <button className='button border-0' type='submit'>Login</button>
                      <Link className='button signup' to="/signup">SignUp</Link>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login