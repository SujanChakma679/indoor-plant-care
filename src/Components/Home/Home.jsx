import React, { Suspense } from 'react';
import PlantSwiper from '../Swiper/PlantSwiper';
import Marquee from 'react-fast-marquee';
import Plants from '../../Plants/Plants';
import PlantCareTips from '../PlantCareTips/PlantCareTips';
import PlantExperts from '../PlantExperts/PlantExperts';

const Home = () => {
    return (
        <div>
           <section className='my-5'>
            <PlantSwiper></PlantSwiper>
           </section>
          <section>
               <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                 <Plants></Plants>
               </Suspense>
          </section>

            <section>
                
                <PlantCareTips></PlantCareTips>
            </section>

            <section>
                <PlantExperts></PlantExperts>
            </section>
            
        </div>
    );
};

export default Home;