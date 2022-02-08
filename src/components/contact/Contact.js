import Reacts, { useState } from 'react';
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { useForm } from 'react-hook-form';

const Contact = () => {

  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const serviceID = "serviceID";
  const templateID = "templateID";
  const userID = "user_kEMKlGGZuL8LTPxeHzxth";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
      )
      r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {

    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Message Sent Successfully!! I will contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id='contact' className='contact'>
      <div className='text-center'>
        <h1>Contact Me</h1>
        <p>Please fill the form and contact me</p>
        <span className='success-message'>{successMessage}</span>
      </div>
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              <div className='text-center'>
                <input
                  type="text"
                  className='form-control'
                  placeholder='Your First Name'
                  name='name'
                  {...register('name',
                  {
                    required: "Please enter your first name",
                    maxLength: {
                      value: 30,
                      message: "Please enter a name less than 30 characters"
                    }
                  })
                }
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.name && errors.name.message}
              </span>
              <div className='text-center'>
                <input
                  type="text"
                  className='form-control'
                  placeholder='Your Last Name'
                  name='lastname'
                  {...register('lastname',
                  {
                    required: "Please enter your last name",
                    maxLength: {
                      value: 30,
                      message: "Please enter a name less than 30 characters"
                    }
                  })
                  }
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.lastname && errors.lastname.message}
              </span>
              <div className='text-center'>
                <input
                  type="email"
                  className='form-control'
                  placeholder='Your Email Address'
                  name='email'
                  {...register('email',
                    {
                      required: "Please enter your email address",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid Email"
                      }
                    })
                  }
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.email && errors.email.message}
              </span>
              <div className='text-center'>
                <input
                  type="text"
                  className='form-control'
                  placeholder='Subject'
                  name='subject'
                  {...register('subject',
                    {
                      required: "Please add the subject"
                    })
                  }
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className='col-md-6 col-xs-12'>
              <div className='text-center'>
                <textarea
                  type="text"
                  className='form-control'
                  placeholder='Please write your message here...'
                  name='description'
                  {...register('description',
                    {
                      required: "Please write your message"
                    })
                  }
                ></textarea>
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.description && errors.description.message}
              </span>

              <button className='btn-main-contact contact-btn' type='submit'>Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )

};

export default Contact;
