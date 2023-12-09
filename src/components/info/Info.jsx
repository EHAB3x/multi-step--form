import { useNavigate } from 'react-router-dom';
import'./Info.css'

const Info = () => {
    const navigate = useNavigate();
    const sub = (e)=>{
        e.preventDefault();
        navigate('/step2')
    }

  return (
    <div className='info'>
        <h1>Personal Info</h1>
        <p className='desc'>Please provide your name, email, address, and phone number.</p>

        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder='e.g. Stephan King'/>

            <label htmlFor="mail">Email Address</label>
            <input type="mail" name="mail" id="mail" placeholder='e.g. stephanking@lorem.com'/>

            <label htmlFor="name">Phone Number</label>
            <input type="text" name="name" id="name" placeholder='e.g. +1 234 567 890'/>

            <button type='submit' onClick={(e)=> sub(e)}>Next Step</button>
        </form>
    </div>
  )
}

export default Info