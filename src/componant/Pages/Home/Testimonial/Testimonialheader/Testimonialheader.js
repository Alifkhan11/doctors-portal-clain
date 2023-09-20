import React from 'react';
import quote from '../../../../assets/icons/quote.svg'
import Testimonialmaincard from '../Testimonialcard/Testimonialmaincard/Testimonialmaincard';

const Testimonialheader = () => {
    return (
        <section className='mt-12'> 
            <div className='flex justify-between'>
                <div>
                    <h5 className='text-primary font-bold text-xl'> Testimonial</h5>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img src={quote} className='lg:w-48 w-24' alt="" />
                </figure>
            </div>
            <div>
                <Testimonialmaincard></Testimonialmaincard>
            </div>
        </section>
    );
};

export default Testimonialheader;