import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqData } from '../constant';
import { line } from '../images';

const FAQ = () => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
  return (
      <section className='bg-[#EBF4F6] w-full h-max p-10'>
          <h2 className=' font-bold text-center '>FAQ's </h2>
          <div className='flex flex-col items-center justify-center p-5'>
              <h3 className='text-4xl font-bold'>Frequently Asked Questions</h3>
              <img src={line} className='w-3/4 -ml-20' alt="" />
          </div>
          <article className='flex flex-col items-center justify-center my-10'>{
              faqData?.map((item) =>
              (
                  <Accordion expanded={expanded === item.title} onChange={handleChange(item.title)} key={item.id} className='w-3/4 my-4 !border-t-0 !shadow-none  lg:w-1/2 '>
                      <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                      >
                          <Typography className='!font-medium '>{item.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                          <Typography className='text-gray-500'>
                              {item.body}
                          </Typography>
                      </AccordionDetails>
                  </Accordion>))}
          </article>
      </section>
  )
}

export default FAQ
