import ReactModal from 'react-modal';
import React, { useState } from "react";


const Main = ({title,poster_path,vote_average,release_date,overview}) => {
    const[show, setShow]=useState(false)
    
	const handleOpenModal =()=> {
		setShow(true)
	  }
	const handleClose=()=>{
		setShow(false)
	}
    
    const API_IMG="https://image.tmdb.org/t/p/w500/"
    return (
		
		
        <div className='flex flex-col items-center"'> 
			 <div>
				<img className="card-img" style={{width:'18rem'}} src={API_IMG+poster_path} alt="" />
			 <br></br>
 
			 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleOpenModal}>View Msore</button>
			 </div>


			
             <div >
				<ReactModal 
				isOpen={show} className="my-modal">
					<div className='ReactModal_Content'>
					<img className="card-img-top" style={{width:'14rem'}} src={API_IMG+poster_path} alt="" />
				<h3>{title}</h3>
                    <h4>ImDB:{vote_average}</h4>
                    <h5>Release Date: {release_date}</h5>
                    <p>{overview}</p>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleClose}>Close</button>

					</div>
				</ReactModal>
                
               
    </div>  
             
           
        </div>
      );
}
 
export default Main;