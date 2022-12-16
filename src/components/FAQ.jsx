import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqData } from '../constant';
import Title from './title';

const FAQ = () => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <section className='bg-[#EBF4F6] w-full h-max p-16'>
            <h2 className=' font-bold text-center '>FAQ's </h2>
            <Title title={'Frequently Asked Questions'} center={false} />
            <article className='flex flex-col items-center justify-center mt-10 nc-accordian'>{
                faqData?.map((item) =>
                (
                    <Accordion expanded={expanded === item.title} onChange={handleChange(item.title)} key={item.id} className='w-[994px]   my-4 !border-t-0 !shadow-none  '>
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
