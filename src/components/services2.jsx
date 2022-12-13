import React from 'react' 
import Card2 from './card2' 
import Title2 from './title2'

const Services2 = ({title,img,subtitle,data}) => {
  return (
    <section className='py-20 relative nc-services'>
        <div className='container mx-auto'>
            <Title2 title={title} subtitle={subtitle} /> 
            <div className='nc-cards-outer ccs-cards-wrap mx-auto flex flex-col  mt-10 justify-center sm:flex-row items-center sm:space-x-1'> 
                {data.map((item) =>
                <Card2
                    img={item.img}
                    title={item.title}
                    body={item.body}
                    key={item.id}
                />
                )}
            </div>
        </div>
    </section>
  )
}

export default Services2
