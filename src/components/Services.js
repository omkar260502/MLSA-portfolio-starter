import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const services =[
  {
    name:'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia distinctio ratione iusto officiis quaerat magni.',
    link: 'Learn More',
  },
  {
    name:'Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia distinctio ratione iusto officiis quaerat magni.',
    link: 'https://www.google.com',
  },
  {
    name:'XYZ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia distinctio ratione iusto officiis quaerat magni.',
    link: 'Learn More',
  },
  
]

const Services = () => {
  return (
    <section className="section"  id='services'>
      SERVICES
    </section>
  );
};

export default Services;
