import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import BaseURL from '../../../components/other/BaseURL'

function ClientBlock({ logo, URL }) {
  return (
    <div className="grid-item verticle_center">
      <Link to={URL}>
        <img className='client_logo' src={logo} alt="" />
      </Link>
    </div>
  );
}

function Clients() {
    const logos = [
        {
          logo: ""+BaseURL+"/media/2021/10/Hombale-Films-Logo.png",
          URL: "/projects/hombale-films/",
        },
        {
          logo: ""+BaseURL+"/media/2023/04/WODO-Clients-Gandhadagudi-1.png",
          URL: "/projects/gandhadagudi/",
        },
        {
          logo: ""+BaseURL+"/media/2024/04/PRK-logo.png",
          URL: "/projects/gandhadagudi/",
        },
        {
          logo: ""+BaseURL+"/media/2024/04/BKP-logo-.png",
          URL: "",
        },
        {
          logo: ""+BaseURL+"/media/2023/04/WODO-Cient-Lenskart.png",
          URL: "",
        },
        // {
        //   logo: ""+BaseURL+"/media/2022/03/Akriti-Kakar.png",
        //   URL: "",
        // },
        {
          logo: ""+BaseURL+"/media/2021/10/MDS-Logo.png",
          URL: "/projects/digital-strawberry/",
        },
        // {
        //   logo: ""+BaseURL+"/media/2021/10/iSmartApps-Logo.png",
        //   URL: "/projects/ismartapps/",
        // },
        {
          logo: ""+BaseURL+"/media/2021/10/Tankerwala-Logo.png",
          URL: "/projects/tankerwala/",
        },
        {
          logo: ""+BaseURL+"/media/2023/03/Godrej-Logo.jpg",
          URL: "",
        },
        {
          logo: ""+BaseURL+"/media/2023/12/wakefit-client-logo.jpg",
          URL: "",
        },
        {
          logo: ""+BaseURL+"/media/2023/12/ultraviolette-client-logo.jpg",
          URL: "",
        },
        {
            logo: ""+BaseURL+"/media/2023/12/squire-client-logo.jpg",
            URL: "",
        },
        {
            logo: ""+BaseURL+"/media/2023/12/kannadatimes-client-logo.jpg",
            URL: "",
        },
        {
            logo: ""+BaseURL+"/media/2023/12/interact-client-logo.jpg",
            URL: "",
        },
        {
            logo: ""+BaseURL+"/media/2023/12/floomy-client-logo.jpg",
            URL: "",
        },
        {
            logo: ""+BaseURL+"/media/2021/10/Prollox-logo.png",
            URL: "/projects/prollox-solutions/",
        },
        {
            logo: ""+BaseURL+"/media/2021/10/Biomedit-Logo.png",
            URL: "/projects/biomedit/",
        },
        // {
        //     logo: ""+BaseURL+"/media/2021/10/Kahaaniya-Logo.png",
        //     URL: "/projects/kahaaniya/",
        //   },
          {
            logo: ""+BaseURL+"/media/2021/10/Audley-Remedys-Logo.png",
            URL: "/projects/audley-remedys/",
          },
        //   {
        //     logo: ""+BaseURL+"/media/2021/10/TCC-Logo.png",
        //     URL: "/projects/the-clique-club/",
        //   },
          {
            logo: ""+BaseURL+"/media/2021/10/Burj-Logo.png",
            URL: "/projects/burj/",
          },
          {
            logo: ""+BaseURL+"/media/2021/10/E-Construct-logo.png",
            URL: "/projects/e-construct/",
          },
          {
            logo: ""+BaseURL+"/media/2024/04/rightcon-logo.png",
            URL: "/projects/rightcon/",
          },
          {
            logo: ""+BaseURL+"/media/2023/04/WODO-Clients-Deev-Realty-1.png",
            URL: "",
          },
          {
            logo: ""+BaseURL+"/media/2023/04/WODO-Clients-Hasiruagro-2.png",
            URL: "/projects/hasiru-agro/",
          },
          {
            logo: ""+BaseURL+"/media/2021/10/The-native-Angadi-Logo.png",
            URL: "/projects/the-native-angadi/",
          },
        //   {
        //     logo: ""+BaseURL+"/media/2023/04/WODO-DGTL-1.png",
        //     URL: "/projects/dgtl-india/",
        //   },
        //   {
        //     logo: ""+BaseURL+"/media/2023/04/WODO-Clients-Leadrat-1.png",
        //     URL: "",
        //   },
          {
            logo: ""+BaseURL+"/media/2024/04/Sea-wonders-logo-2.png",
            URL: "",
          },
          {
            logo: ""+BaseURL+"/media/2023/04/WODO-Clients-TMB-1.png",
            URL: "https://thematchbox.in/",
          },
          {
            logo: ""+BaseURL+"/media/2023/04/WODO-Clients-TIE-1.png",
            URL: "",
          },
          {
            logo: ""+BaseURL+"/media/2023/04/WODO-Clients-TLE-1.png",
            URL: "/projects/the-life-engineering/",
          },
          {
            logo: ""+BaseURL+"/media/2021/10/CAKN-Logo.png",
            URL: "/projects/clean-air-asia",
          }
      ];

  return (
    <div className=''>
      <div className="container py-5 " style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', position: 'relative' }}>
          <div style={{ width: '60px', backgroundColor: '#1f1f1f', height: 5, marginTop: 5, marginRight: 10, position: 'absolute', left: '-65px' }}>
            {/* dash */}
          </div>

          <div>
            <h2 className="Heading_title-black">
              PARTNER 
              <br />
              PARADE
            </h2>
            <p className='gf_text pt-2 home-p'>
            Trusted by Industry Leaders to Deliver Digital Excellence
            </p>
          </div>
        </div>

        <div className="grid-container">
          <div className="grid-item verticle_center">
            <span className='gf_h1' style={{ color: '#1f1f1f' }}>180</span>
            Clients
          </div>
          <div className="grid-item verticle_center">
            <span className='gf_h1' style={{ color: '#1f1f1f' }}>6</span>
            Countries
          </div>
          {logos.map((item, index) => (
            <ClientBlock key={index} logo={item.logo} URL={item.URL} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
