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
		
		
        <div>

              
			 <div className="card-body">
             
			 <img className="card-img" style={{width:'14rem'}} src={API_IMG+poster_path} alt="" />
			 <br></br>
 
			 <button className="btn btn-dark" onClick={handleOpenModal}>View Msore</button></div>


			
             <div >
				<ReactModal 
				isOpen={show} className="my-modal">
					<div className='ReactModal_Content'>
					<img className="card-img-top" style={{width:'14rem'}} src={API_IMG+poster_path} alt="" />
				<h3>{title}</h3>
                    <h4>ImDB:{vote_average}</h4>
                    <h5>Release Date: {release_date}</h5>
                    <p>{overview}</p>
					<button onClick={handleClose}>Close</button>

					</div>
				</ReactModal>
                
               
    </div>  
             
           
        </div>
      );
}
 
export default Main;