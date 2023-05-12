import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z }  from "zod";
import './connect.css';
import linkedin from '../res/linkedin.png';
import github from '../res/github.png';

const schema = z.object({
  name: string().min(1, { message: 'Name is required!' }),
  email: string().email(),
  message: string().min(1, { message: 'Message is required!' }),
});

const Connect = ( { onSave, user = {} }) => {
  const { register, handleSubmit, formState, reset } = useForm({ resolver: zodResolver(schema) });

  const { errors } = formState;

  const handleSave = (formValues) => {
    onSave(formValues);
    reset();
    setSuccessMessage('Message submitted!');
  }

  const [successMessage, setSuccessMessage] = useState('');

  return (
    <div className='last-part'>
      <main className='connect-section'>
        <div className='connect-text'>
          <p className='connect-title'> Let's Connect! </p>
          <p className='connect-subtitle'>I WOULD LOVE TO CONNECT WITH YOU ABOUT A NEW OPPORTUNITY, A COLLABORATION, OR A QUICK CHAT ABOUT ANYTHING :&#41;</p>
          </div>

        <form className="connect-form" onSubmit={handleSubmit(handleSave)}>
          <div className='name-div'>
            <input
              className='name-input'
              placeholder='Name'
              {...register('name')}
            />
            <div className='error'>{errors.name?.message}</div>
          </div>

          <div className='email-div'>
            <input
              className='email-input'
              placeholder='Email'
              {...register('email')}
            />
            <div className='error'>{errors.email?.message}</div>
          </div>
          
          <div className='message-div'>
            <textarea
              className='message-input'
              placeholder='Message'
              cols="40"
              rows="14"
              {...register('message')}
            />
            <div className='error'>{errors.message?.message}</div>
          </div>
          <button className='connect-button' type="submit">Connect</button>
          <p className='success'>{successMessage && <p>{successMessage}</p>}</p>
        </form>    
      </main>

      <footer className='foot'>
        <hr color="white" size="5" width="90%"/>
        
        <div className='line'>
          <div className='left'>
            <p>Stanley Lin</p> 
            <p>stanleylin82@gmail.com</p>
          </div>
          <div className='right'>
            <a href="https://www.linkedin.com/in/stanleylinuw" rel="noopener">
              <img className="linkedin" src={linkedin} alt="my linkedin" />
            </a>
            <a href="https://github.com/stanleyylin" rel="noopener">
              <img className="github" src={github} alt="my github"/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Connect
