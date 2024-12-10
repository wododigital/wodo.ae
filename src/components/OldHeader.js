import React,{useEffect,useState,useRef} from 'react'
import Logo from '../media/wodo-logo.png'
import Menu from '../media/wodo-hamburger-icon.png';
import './header_css.css'
import {Link} from 'react-router-dom'
import NavMenu from './NavMenu';
import {gsap} from 'gsap';

function OldHeader() {
    const heading = useRef([]);
    const navBar = useRef();
    const icons = useRef([]);
    const [bodyClass, setBodyClass] = useState('');
    const [MenuStatus, setMenuStatus] = useState(false);
    // const tl = useRef(null);
    const initializeAnimation = () => {
        const navBarRef = navBar.current;
        const tl =gsap.timeline();
        // tl.to(navBarRef,{
        //     top: 0,
        //     duration: 0.7,
        //     onComplete: () => console.log("Animation completed"),
        //     onReverseComplete: () => console.log("Animation reversed"),
        // });
        tl.from(heading.current,{
            x: 150,
            duration: 0.6,
            stagger: 0.28,
            opacity: 0,
            ease: "power.out",
        });
        tl.from(icons.current,{
            duration: 0.7,
            opacity: 0,
        });
        tl.pause();
        if(MenuStatus){
            tl.play(); 
        }else{
            // console.log("false "+MenuStatus);
            tl.reverse();
        }
    
    };
    useEffect(() => {
        initializeAnimation();
    }, [MenuStatus]);

    const handleButtonClick = () => {
        // if(MenuStatus===true){
        //     setBodyClass('');
            
        // }else{
        //     setBodyClass('navMenus');
        // }
      
      setMenuStatus(!MenuStatus);

    };

 

    useEffect(() => {
        let lastScrollTop = 0;

        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header_container');
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
            if (scrollTop > lastScrollTop) {
                // Scroll down

                header.style.opacity = '0%';
                header.style.top='-100px';
            

            } else {
                // Scroll up
                header.style.opacity = '100%';
                header.style.top='0';
            }
            lastScrollTop = scrollTop;
        });
    },[])


  
    useEffect(() => {
      // Update the body class when bodyClass state changes
      document.body.className = bodyClass;
        
      // Cleanup the body class on component unmount
      return () => {
        document.body.className = '';
      };
    }, [bodyClass]);

  return (
    <>
        <NavMenu id="navMenu" NavBar={navBar} MenuStatus={MenuStatus} HeadingRef={heading} Icons={icons} NavMenuHandle={handleButtonClick}/>
        <div className='header_container' style={{zIndex:99}}>
                <nav className="navbar ">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={Logo} className='header_logo' alt="Best Digital Marketing Agency in Bangalore" title="Digital Marketing Agency For Startups"/>
                        </Link>
                        <span className="navbar-toggler" onClick={handleButtonClick} style={{border:'none'}} type="button" >
                            {/* <span className="navbar-toggler-icon"></span> */}
                            <img src={Menu} alt="" />
                        </span>

                        

                        {/* <div className="offcanvas offcanvas-end text-white" style={{width:'100%',backgroundColor:'#1f1f1f',color:'#ffffff !important'}} tabIndex="-1"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <div className="container-fluid">
                                <img src={Logo} alt="" className='header_logo' />
                                <button type="button" style={{float:'right'}} className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                            </div>
                            <div className="offcanvas-body" style={{zIndex:'999999999',position:'relative'}}>

                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item"  data-bs-dismiss="offcanvas">
                                        <Link className="nav-link nav-text-custom activeItem" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item" data-bs-dismiss="offcanvas" >
                                        <Link className="nav-link nav-text-custom" to="/projects" >Projects</Link>
                                    </li>
                                    <li className="nav-item" data-bs-dismiss="offcanvas" >
                                        <Link className="nav-link nav-text-custom" to="/projects" >Our Story</Link>
                                    </li>
                                    
                                    <li className="nav-item dropdown">
                                        <a className="nav-link nav-text-custom dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Services
                                        </a>
                                        <ul className="dropdown-menu" style={{backgroundColor:'#ffffff00'}}>
                                            <li><a className="dropdown-item nav-text-custom" href="#">Design & Branding</a></li>
                                            <li><a className="dropdown-item nav-text-custom" href="#">Development</a></li>
                                            <li><a className="dropdown-item nav-text-custom" href="#">Growth & Performance Marketing</a></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item" data-bs-dismiss="offcanvas" >
                                        <Link className="nav-link nav-text-custom" to="/projects">Blog</Link>
                                    </li>

                                    <li className="nav-item" data-bs-dismiss="offcanvas" >
                                        <Link className="nav-link nav-text-custom" to="/projects">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                    </nav>
                {/* <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={Logo} className='header_logo' title="Digital Marketing Agency For Startups"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <span className="d-flex" role="search">
                            
                            <img src={Menu} alt="" style={{height:'42px'}} />
                        </span>
                        </div>
                    </div>
                </nav> */}
            
        </div>
    </>
  )
}

export default OldHeader
