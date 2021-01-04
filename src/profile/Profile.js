import React from 'react'
import PropTypes from "prop-types"


function Profile({FullName,Bio,Profession,x}) {
    
    return (
        <>
         <div style={{marginTop:"60px"}}>
            <img src='/user.png' alt='User'></img>
        </div>
        <div>
            <h1 style={{fontSize:"60px"}}>My name is: {FullName}</h1>
        </div>
        <div>
            <p style={{fontSize:"30px"}}>Bio : {Bio}</p>
        </div>
        <div>
            <h2 style={{fontSize:"50px"}}>Profession : {Profession}</h2>
        </div>
       
        <p onClick={()=>x(FullName)} style={{color: "red" ,fontSize:"40px"}}>Click me !!</p>
        </>
        
    )

}
Profile.propTypes = {
    FullName: PropTypes.string.isRequired,
    Profession: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    x: PropTypes.func.isRequired,
  };

export default Profile

