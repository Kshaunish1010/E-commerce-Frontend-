import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {AiTwotoneHome} from 'react-icons/ai'
import {FiPhoneCall,FiMail} from 'react-icons/fi'
import {BsInfoCircle} from 'react-icons/bs'
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className='contact-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19349.848233792993!2d73.83387263205739!3d18.463266974826585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1681828643599!5m2!1sen!2sin"
                width="600"
                height="450"
                className='border-0 w-100'
                allowFullScreen=""
                loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div><h3 className='contact-title mb-4'>Contact</h3>
              <form action='' className='d-flex flex-column gap-15'>
              <div>
                <input type='text' className='form-control' placeholder='Name'/>
              </div>
              <div>
                <input type='email' className='form-control' placeholder='Email'/>
              </div>
              <div>
                <input type='tel' className='form-control' placeholder='Mobile Number'/>
              </div>
              <div>
                <textarea  className='w-100 form-control' name='' 
                id='' 
                cols="30" 
                rows="4" 
                placeholder="Comments"></textarea>
              </div>
              <div>
                <button className='button border-0'>Submit</button>
              </div>
              </form>
              </div>
              <div><h3 className='contact-title mb-4'>Get in touch with us</h3>
              <div>
                <ul className='ps-0'>
                  <li className='mb-0 d-flex gap-15 align-items-center'>
                  <AiTwotoneHome className='fs-3 '/>
                  <address className='mb-0'>House nl==mmmcmswmkllcf </address>
                  </li>
                  <li className='mb-0 d-flex gap-15 align-items-center'>
                  <FiPhoneCall className='fs-3'/>
                  <a href='tel:+91-7923670745'>+91-7923670745</a>
                  </li>
                  <li className='mb-0 d-flex gap-15 align-items-center'>
                  <FiMail className='fs-3'/>
                  <a href='Mail to:ghdshahbjbh@gmail.com'>ghdshahbjbh@gmail.com</a>
                  </li>
                  <li className='mb-0 d-flex gap-15 align-items-center'>
                  <BsInfoCircle className='fs-3'/>
                  <p className='mb-0'>Monday-friday 10am-8pm</p>
                  </li>
                </ul>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;