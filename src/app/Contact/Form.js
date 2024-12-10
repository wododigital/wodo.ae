import React,{useState,useEffect} from 'react'
import './form.css'
import startupIcon from './icons/startup.svg'
import documentIcon from './icons/document.svg'
import wifi from './icons/wifi.svg'
import branding from './icons/branding.svg'
import packaging from './icons/packaging.svg'
import development from './icons/development.svg'
import ux from './icons/ui.svg'
import video from './icons/video.svg'
import photo from './icons/photo.svg'
import marketing from './icons/marketing.svg'
import social from './icons/social_media.svg'
import close from './icons/close.svg'
import axios from 'axios'

function Form(props){
    const [selectedOption, setSelectedOption] = useState(null);
    const [modal, setModal] = useState(false);
    const [selectedServices, setSelectedServices] = useState([]);
    const [formData,setFormData]=useState({
       name:'',
       email:'',
       company_address:'',
       contact_number:'',
       services:null,
       requirement:[], 
       budget:'',
       deadline:'',
       message:'',
       hear_us_from:''
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

    const formHandler=(e)=>{
        e.preventDefault();
        // console.log(formData);
        axios.put('https://server-demo.wodo.digital/lead-query/new-query',formData)
        .then((res)=>{
            if(res.data.data.status==='success'){
                setModal(true); 
                setFormData({
                    name:'',
                    email:'',
                    company_address:'',
                    contact_number:'',
                    services:null,
                    requirement:[],
                    budget:'',
                    deadline:'',
                    message:'',
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

    const closeModal=()=>{
        setModal(false);
    }
    return (
        <>
            <div className='formSlider' ref={props.ContainerRef}> 
                <div className='container' >
                    <div className='my-5'>
                        <div className='text-end'>
                            <img src={close} alt="close-btn" className='close-btn' onClick={props.NavMenuHandle}/>
                        </div>  
                        <div className='row py-5'>
                            <div className='col-md pe-xxl-5'>
                                <div className='pe-xxl-5'>
                                    <span className='form-h6'>Startup Superpowers Activated / Being a startup is...​</span>
                                    <span className='mt-3 form-h1'>Let's face it, tired of blending in? We craft startups that stand out.​</span>
                                    <p>Forget generic logos and marketing mumbo jumbo. We’re brand alchemists, turning raw ideas into magnetic identities that attract customers like moths to a flame. We design experiences that tell your story, not just sell your product, and unlock hidden opportunities to launch you to the top.</p>
                                </div>
                                <div className='mt-5'>
                                    <span className='mb-4 form-h6'>How we can help​</span>
                                    <div className='row my-2 url'>
                                        <div className='col'>Branding and identity</div>
                                        <div className='col'>Research and discovery</div>
                                    </div>
                                    <div className='row my-2 url'>
                                        <div className='col'>Visual Design</div>
                                        <div className='col'>Digital Marketing</div>
                                    </div>
                                    <div className='row my-2 url'>
                                        <div className='col'>Websites</div>
                                        <div className='col'>SEO & SEM</div>
                                    </div>
                                    <div className='row my-2 url'>
                                        <div className='col'>Web Analytics</div>
                                        <div className='col'>Consultation</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md'>
                                <span className='form-h3'>Let's get started</span>
                                <div className='pt-4'>
                                    <form onSubmit={formHandler}>
                                        <div className='mb-4'>
                                            <label>Your Name *</label>
                                            <input type='text' placeholder='Your Name' id="name" value={formData.name} onChange={handlerInput} className='form-control' required/>
                                        </div>
                                        <div className='mb-4'>
                                            <label>Email Address *</label>
                                            <input type='email' placeholder='Email Address' id="email" value={formData.email} onChange={handlerInput} className='form-control' required/>
                                        </div>
                                        <div className='mb-4'>
                                            <label>Company Address *</label>
                                            <input type='text' placeholder='Company Address' id="company_address" value={formData.company_address} onChange={handlerInput} className='form-control' required/>
                                        </div>
                                        <div className='mb-4'>
                                            <label>Contact Number *</label> 
                                            <input type='text' placeholder='Contact Number' id="contact_number" value={formData.contact_number} onChange={handlerInput} className='form-control' required/>
                                        </div>
                                        <div className='mb-4'>
                                            <label>These Are Services For A.. *</label>
                                            <div className='grid-container-2'>
                                                <div className=''>
                                                    <div className='box'>
                                                        <input type='radio' name='services' className='d-none' value="Startup/D2C Brand" checked={selectedOption === 'Startup/D2C Brand'}/>
                                                        <img className={selectedOption === 'Startup/D2C Brand' ? 'radio-image active-border':'radio-image inactive-border'} src={documentIcon} alt="Startup or D2C Brand" onClick={() => handlerRadio('Startup/D2C Brand')}></img>
                                                    </div>
                                                </div>
                                                <div className=''>
                                                    <div className='box'>
                                                        <input type='radio' name='services' className='d-none' value="Existing/New Business" checked={selectedOption === 'Existing/New Business'}/>
                                                        <img className={selectedOption === 'Existing/New Business' ? 'radio-image active-border':'radio-image inactive-border'} src={startupIcon} alt="Existing or New Business" onClick={() => handlerRadio('Existing/New Business')}></img>
                                                    </div>
                                                </div>
                                                <div className=''>
                                                    <div className='box'>
                                                        <input type='radio' name='services' className='d-none' value="Product/Tech company" checked={selectedOption === 'Product/Tech company'}/>
                                                        <img className={selectedOption === 'Product/Tech company' ? 'radio-image active-border':'radio-image inactive-border'} src={wifi} alt="Product or Tech company" onClick={() => handlerRadio('Product/Tech company')}></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mb-4'>
                                            <label>Your Requirement *</label>
                                            <div className='grid-container-2'>
                                            {[
                                                { name: 'Branding', img: branding },
                                                { name: 'Packaging', img: packaging },
                                                { name: 'Web development', img: development },
                                                { name: 'UI/UX', img: ux },
                                                { name: 'Video production', img: video },
                                                { name: 'Photography', img: photo },
                                                { name: 'Digital Marketing', img: marketing },
                                                { name: 'Social Media Marketing', img: social },
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
                                            <label>Project Budget *</label>
                                            <input type='text' placeholder='Project Budget' id="budget" value={formData.budget} onChange={handlerInput} className='form-control' required/>
                                        </div>
                                        <div className='mb-4'>
                                            <label>Project Deadline *</label>
                                            <select className='form-select' id="deadline" value={formData.deadline} onChange={handlerInput} required>
                                                <option selected>Select</option>
                                                <option value="1-2 Months">1-2 Months</option>
                                                <option value="2-4 Months">2-4 Months</option>
                                                <option value="4-6 Months">4-6 Months</option>
                                            </select>
                                        </div>
                                        <div className='mb-4'>
                                            <label>Your Message *</label>
                                            <textarea className='form-control' placeholder="Let us know about your project" id="message" value={formData.message} onChange={handlerInput} required></textarea>
                                        </div>
                                        <div className='mb-4'>
                                            <label>How did you hear about us? *</label>
                                            <select className='form-select' id="hear_us_from" value={formData.hear_us_from} onChange={handlerInput} required>
                                                <option selected>Select</option>
                                                <option value="Google Ads">Google Ads</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="LinkedIn">LinkedIn</option>
                                                <option value="Instagram">Instagram</option>
                                                <option value="Recommended By A Past Client">Recommended By A Past Client</option>
                                            </select>
                                        </div>
                                        <div className='mb-4'>
                                            <button className="submit-btn">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={modal ? "modal fade form-show":"modal fade hide"} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!modal}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <span className="modal-title fs-5" id="exampleModalLabel">Confirmation</span>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body text-center">
                            <p>Thank you for reaching out! Your message has been successfully submitted. We will get back to you shortly.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Form