import React from 'react'
import {data}  from './dummy'

function Card() {
    return (
            <div>
                <h1>Testing</h1>
                {data.map((data) => (
                <div className='card'>
                        <div className='row'>
                            <div className='col-lg-2'>
                               <img src={data.image} alt="" />
                            </div>
                            <div className='col-10'>
                                <h5>{data.username}</h5>
                                <h5>{data.follower}</h5>
                            </div>
                        </div>
                </div>
                ))}
            </div>
             
       
    );
  }
  export default Card;