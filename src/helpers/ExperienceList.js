import UWSign from "../assets/gallery/WATERLOO-FI.png";
import UWLogo from "../assets/logos/UniversityOfWaterloo_logo_vert_rgb.png";

import UWFELogo from "../assets/logos/UWFE-black.webp";
import UWFEImage1 from "../assets/gallery/UWFE-1.webp";
import UWFEImage2 from "../assets/gallery/UWFE-2.webp";

import SoFLogo from "../assets/logos/Save_On_Foods_Logo.png";
import SoFImage from "../assets/gallery/Save-On-Foods.webp";

import YIGImage from "../assets/gallery/YIG.jpg"
import YIGLogo from "../assets/logos/independent_v2.svg"



const experiences = [
  {
    id: 4,
    org: 'University Of Waterloo',
    role: 'BASc in Computer Engineering',
    duration: 'Sept 2025 - Present',
    image: UWSign,
    logo: UWLogo,
    link: 'https://uwaterloo.ca/'
  },    
  {
    id: 3,
    org: 'University of Waterloo Formula Electric',
    role: 'Suspention Subteam Member',
    duration: 'December 2024 - April 2025',
    image: UWFEImage1,
    logo: UWFELogo,
    link: '',
    description: [
      '.. Coming Soon ..'
    ],
    skills: ['Skill 1', 'skill 2', 'skill 3'],
    gallery: [UWFEImage1, UWFEImage2]

    },
    {
    id: 2,
    org: 'Save-On-Foods',
    role: 'Grocery Clerk / Dairy Clerk',
    duration: 'June 2023 - August 2024',
    image: SoFImage,
    logo: SoFLogo,
    link: '',
    description: [
      'COMING',
      'SOON...'
    ],
    skills: ['Teamwork', 'Heavy freight handeling', 'Costumer Satisfaction']
    },
    {
    id: 1,
    org: 'Your Independent Grocer',
    role: 'Grocery Clerk / Shift Supervisor',
    duration: 'November 2021- june 2023',
    image: YIGImage,
    logo: YIGLogo,
    description: [
      'COMING',
      'SOON...'
    ],
    skills: ['Teamwork', 'Heavy freight handeling', 'Shipping & Recieving', 'Costumer Satisfaction']
    }
  ];

  export default experiences;
