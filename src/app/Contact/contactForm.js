import React,{useState,useEffect} from 'react'
import './form.css'
import startupIcon from './icons/icon-1.png'
import BusinesspIcon from './icons/icon-2.png'
import CorporateIcon from './icons/icon-3.png'
import IdeaValidation from './icons/idea-icon.png'
import BusinessConsulting from './icons/consulting-icon.png'
import BusinessStrategy from './icons/startegy-icon.png'
import Branding from './icons/branding-icon.png'
import WebDevelopment from './icons/webdev-icon.png'
import APPDevelopment from './icons/appdev-icon.png'
import PerformanceMarketing from './icons/performance-icon.png'
import CreativeMarketing from './icons/creative-icon.png'
import GEO from './icons/geo-icon.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API_URL from '../../config'

function Form() {
    const [selectedOption, setSelectedOption] = useState(null);

    const [selectedServices, setSelectedServices] = useState([]);
    const [formData,setFormData]=useState({
       name:'',
       email:'',
       contact_number:'',
       services:null,
       requirement:[], 
       budget:'',
       deadline:'',
       hear_us_from:'',
       country:'UAE'
    });

    const handlerRadio=(msg)=>{
        setSelectedOption(msg);
        setFormData(prevState => ({
            ...prevState,
            services: msg
        }));
    }

    const handleImageClick = (service) => {
      setSelectedServices((prevSelectedServices) =>
        prevSelectedServices.includes(service)
            ? prevSelectedServices.filter((item) => item !== service)
            : [...prevSelectedServices, service]
        );
    };

    useEffect(() => {
        setFormData(prevState => ({
          ...prevState,
          requirement: selectedServices
        }));
      }, [selectedServices]);
  
    const isChecked = (service) => selectedServices.includes(service);
    const navigate = useNavigate();
    const formHandler=(e)=>{
        e.preventDefault();
        // console.log(formData);
        axios.post(`${API_URL}/contact-us`,formData,{
            withCredentials:true,
        })
        .then((res)=>{
            if(res.data.status==='success'){
                navigate("/thank-you");
                setFormData({
                    name:'',
                    email:'',
                    contact_number:'',
                    services:null,
                    requirement:[],
                    budget:'',
                    deadline:'',
                    hear_us_from:''
                 });
                setSelectedOption(null);
                setSelectedServices([]);
              
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    }
    const handlerInput=(e)=>{
        const {id, value} =e.target;
        setFormData((prevData)=>({
           ...prevData,
           [id]:value,
        }))
    }

    
  return (
    <div className='col-md'>
        <div className='ps-md-5 pt-md-5'>
            <form onSubmit={formHandler}>
                <div className='mb-4'>
                    <label>Your Name *</label>
                    <input type='text' placeholder='Your Name' id="name" value={formData.name} onChange={handlerInput} className='form-control' required/>
                </div>
                <div className='mb-4'>
                    <label>Email Address *</label>
                    <input type='email' placeholder='Email Address' id="email" value={formData.email} onChange={handlerInput} className='form-control' required/>
                </div>
                {/* <div className='mb-4'>
                    <label>Company Address *</label>
                    <input type='text' placeholder='Company Address' id="company_address" value={formData.company_address} onChange={handlerInput} className='form-control' required/>
                </div> */}
                <div className='mb-4'>
                    <label>Contact Number *</label> 
                    <input type='text' placeholder='Contact Number' id="contact_number" value={formData.contact_number} onChange={handlerInput} className='form-control' required/>
                </div>
                <div className='mb-4'>
                    <label>I am a .. *</label>
                    <div className='grid-container-2'>
                        <div className=''>
                            <div className='box'>
                                <input type='radio' name='services' className='d-none' value="Startup / I am starting" checked={selectedOption === 'Startup / I am starting'}/>
                                <img className={selectedOption === 'Startup / I am starting' ? 'radio-image active-border':'radio-image inactive-border'} src={startupIcon} alt="Startup / I am starting" onClick={() => handlerRadio('Startup / I am starting')}></img>
                            </div>
                        </div>
                        <div className=''>
                            <div className='box'>
                                <input type='radio' name='services' className='d-none' value="Established Business" checked={selectedOption === 'Established Business'}/>
                                <img className={selectedOption === 'Established Business' ? 'radio-image active-border':'radio-image inactive-border'} src={BusinesspIcon} alt="Existing or New Business" onClick={() => handlerRadio('Established Business')}></img>
                            </div>
                        </div>
                        <div className=''>
                            <div className='box'>
                                <input type='radio' name='services' className='d-none' value="Corporate / Enterprise" checked={selectedOption === 'Corporate / Enterprise'}/>
                                <img className={selectedOption === 'Corporate / Enterprise' ? 'radio-image active-border':'radio-image inactive-border'} src={CorporateIcon} alt="Product or Tech company" onClick={() => handlerRadio('Corporate / Enterprise')}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <label>I looking for *</label>
                    <div className='grid-container-2'>
                    {[
                        { name: 'Idea Validation', img: IdeaValidation },
                        { name: 'Business Consulting', img: BusinessConsulting },
                        { name: 'Business Strategy', img: BusinessStrategy },
                        { name: 'Branding', img: Branding },
                        { name: 'Web Development', img: WebDevelopment },
                        { name: 'APP Development', img: APPDevelopment },
                        { name: 'Performance Marketing', img: PerformanceMarketing },
                        { name: 'Creative Marketing', img: CreativeMarketing },
                        { name: 'GEO (AI SEO)', img: GEO },
                        ].map((service, index) => (
                        <div className='' key={index}>
                            <div className='box'>
                            <input
                                type='checkbox'
                                value={service.name}
                                checked={isChecked(service.name)}
                                onChange={() => handleImageClick(service.name)}
                                className='d-none'
                            />
                            <img
                                src={service.img}
                                alt={service.name}
                                onClick={() => handleImageClick(service.name)}
                                className= {isChecked(service.name) ? 'select-image active-border' : 'select-image inactive-border'}
                                
                            />
                            </div>
                        </div>
                        ))}
                    
                        {/* <div className='col'></div> */}
                    </div>  
                </div>
                <div className='mb-4'>
                    <label>I am ready to Invest *</label>
                    {/* <input type='text' placeholder='Project Budget' id="budget" value={formData.budget} onChange={handlerInput} className='form-control' required/> */}
                    <select className='form-select' id="budget" value={formData.budget} onChange={handlerInput} required>
                        <option selected>Select</option>
                        <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                        <option value="$50,000 - $200,000">$50,000 - $200,000</option>
                        <option value="$1M and above">$1M and above</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label>I have a strict time line *</label>
                    <select className='form-select' id="deadline" value={formData.deadline} onChange={handlerInput} required>
                        <option selected>Select</option>
                        <option value="1-2 Months">1-2 Months</option>
                        <option value="2-4 Months">2-4 Months</option>
                        <option value="4-6 Months">4-6 Months</option>
                    </select>
                </div>
                {/* <div className='mb-4'>
                    <label>Your Message *</label>
                    <textarea className='form-control' placeholder="Let us know about your project" id="message" value={formData.message} onChange={handlerInput} required></textarea>
                </div> */}
                <div className='mb-4'>
                    <label>Was it destiny or ? *</label>
                    <select className='form-select' id="hear_us_from" value={formData.hear_us_from} onChange={handlerInput} required>
                        <option selected>Select</option>
                        <option value="I found you on google or meta">I found you on google or meta</option>
                        <option value="I read an article about you">I read an article about you</option>
                        <option value="My friends friend was your customer">My friends friend was your customer</option>
                        <option value="It was destiny">It was destiny</option>
                        {/* <option value="Recommended By A Past Client">Recommended By A Past Client</option> */}
                    </select>
                </div>
                <div className='mb-4'>
                    <button className="submit-btn">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}


function ContactForm(){
    return(
        <Form/>
    )
}

export default ContactForm