
import img from '../../assets/exosome1.jpg';

import background from '../../assets/home_img.avif';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './custom-slider.css';
import './team-css.css'
import Member1 from '../../assets/exosome1.jpg';
import Member2 from '../../assets/exosome1.jpg';
import Member3 from '../../assets/exosome1.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Home = () => {
   const cards = [
    {
      title: 'Card 1',
      image: background,
    },
    {
      title: 'Card 2',
      image: background,
    },
    {
      title: 'Card 3',
      image: background,
    },
    {
      title: 'Card 4',
      image: background,
    },
    {
      title: 'Card 5',
      image: background,
    },
   
  ];
  const CardSlider = ({ cards }) => {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <div className="mx-0">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-2">
              <div className="bg-white border rounded-lg shadow-lg p-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 md:h-52 lg:h-64 object-cover mb-4"
                />
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                  {card.title}
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
   const  Team = () => {
    return (
      <div id='model3' className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4">Team</h1>
          <div className="divider"></div>
          <div className="members flex flex-row">
            <div className="member" >
              <img width={200} height={200} src={Member1} alt=''/>
              <div className="description">
                  <h1>Ahmed ALAMI</h1>
                  <h2>CEO</h2>
                  <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <LinkedInIcon />
                    <PinterestIcon />
                  </div>
              </div>
            </div>
            <div className="member">
              <img width={200} height={200} src={Member2}/>
              <div className="description">
                  <h1>Omar Nadir</h1>
                  <h2>CEO</h2>
                  <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <LinkedInIcon />
                    <PinterestIcon />
                  </div>
              </div>
            </div>
            
          </div>
          <div className="members flex flex-row">
            <div className="member">
              <img width={200} height={200} src={Member1} alt=''/>
              <div className="description">
                  <h1>Ahmed ALAMI</h1>
                  <h2>CEO</h2>
                  <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <LinkedInIcon />
                    <PinterestIcon />
                  </div>
              </div>
            </div>
            <div className="member">
              <img width={200} height={200} src={Member2}/>
              <div className="description">
                  <h1>Omar Nadir</h1>
                  <h2>CEO</h2>
                  <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <LinkedInIcon />
                    <PinterestIcon />
                  </div>
              </div>
            </div>
            <div className="member">
              <img width={200} height={200} src={Member1} alt=''/>
              <div className="description">
                  <h1>Ahmed ALAMI</h1>
                  <h2>CEO</h2>
                  <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <LinkedInIcon />
                    <PinterestIcon />
                  </div>
              </div>
            </div>
            <div className="member">
              <img width={200} height={200} src={Member2}/>
              <div className="description">
                  <h1>Omar Nadir</h1>
                  <h2>CEO</h2>
                  <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
                  </p>
                  <div className="social-media">
                    <InstagramIcon />
                    <LinkedInIcon />
                    <PinterestIcon />
                  </div>
              </div>
            </div>
            
          </div>
      </div>
    );
  }

  return (
    
    <div className="home">
      {/*home*/}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{ minHeight: '115vh' }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url('${background}')` }}>
           </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">Your story starts with us.</h1>
                <p className="mt-4 text-lg text-slate-200">This is a simple example of a Landing Page you can build using Tailwind Starter Kit. It features multiple CSS components based on the Tailwindcss design system.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden" style={{ height: '70px' }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-slate-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>
    {/*about us*/}
    <div className="flex flex-col md:flex-row p-4">
      <div className="md:w-1/2">
        <img
          src={img}
          alt="About"
          className="max-w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0">
        <h2 className="text-4xl text-left font-bold">About Us</h2>
        <p className="mt-4 text-xl text-left">
          At ExSURE, we ensure curing cancer via specifically targeting the cancer stem cell subpopulation, which is the major cause behind cancer relapse. This drug-resistant subpopulation of cancer stem cell eventually leading to tumor recurrence or cancer relapse. At ExSURE, we will package the chemotherapeutic drugs within the dendritic cell-derived exosomes which will selectively recognize the drug-resistant cancer stem cell subpopulation and tumor cells, sparing the healthy tissue.
        </p>
        <div className="mt-4 text-left">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Read More
          </button>
        </div>
      </div>
    </div>
    {/* certificates  */}
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Certificates</h1>
      <CardSlider cards={cards} />
    </div>
   
    {/* team  */}
    <Team />
  

    {/* clients  */}

    {/* blog  */}

    </div>
  );
};

export default Home;






