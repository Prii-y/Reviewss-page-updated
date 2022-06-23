import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Profile = () => {
    
    const [index,setIndex]=useState(0);
    // const [profile,setProfile]=useState(data);
    const {id,image,name,title,quote}=data[index];
    const last=data.length-1;

    const next=()=>{
        // console.log('---',index);
        if(index==last){
            setIndex(0);
            // console.log('next---',index);
        }
        else {setIndex(()=>index+1)
    };
        // console.log('next---',index);
    };



    const prev=()=>{
        if(index==0){
            setIndex(last);
        }
        else  setIndex(()=>index-1);
        // console.log('prev---',index);
    };
   
  useEffect(()=>{   let slider=setInterval(()=>{next()},2000);
    return ()=>{clearInterval(slider)};
},[index])

  return (
    <>
       {/* <h1>{id}</h1>
        <img  className='person-img' src={image}/>
        <h1>{name}</h1>
        <h4>{title}</h4>
    <p>
        {quote}

    </p>
    <button onClick={()=>{prev()}} > <FiChevronLeft></FiChevronLeft>  </button>
    <button    onClick={()=>{next()}}> <FiChevronRight></FiChevronRight> </button> */}

    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        
        <article  key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
        <button className='prev' onClick={prev}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={next}>
          <FiChevronRight />
        </button>
      </div>
    </section>

    </>
  )
}

export default Profile