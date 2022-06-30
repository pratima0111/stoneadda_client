import { Avatar } from '@mui/material';
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css"
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const PreviousBtn = (props) => {
  const {className , onClick } = props ;
  return(
    <div className={className} onClick={onClick} >
      <ArrowBackIos style={{color : "grey" , fontSize : "45px"}} />
    </div>
  );
  };

const NextBtn = (props) => {
const {className , onClick } = props ;
return(
  <div className={className} onClick={onClick} >
    <ArrowForwardIos style={{color : "grey" , fontSize : "45px" }} />
  </div>
);
};

const Testimonials = () => {
  return (
    <div className='testimonials' style={{ display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
    <div className='header'><h1>Testimonials</h1></div>
    <br className='break'/>
    <br className='break'/>
    <div className='slider' style={{ width:"50%"}}>
      <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} > 
        <Card img="#"/>
        <Card img="#"/>
        <Card img="#"/>
      </Slider>
    </div>

</div>
  )
}

const Card =({img})=>
{
  return (
    <div style={{display:"flex" , alignItems:"center" , justifyContent:"center" ,flexDirection: "column", textAlign:"center" , }} className='card'>
      <Avatar className='avatar' src={img} style={{width:80 , height:80, borded: "1px solid lightgrey" , padding:"7px"}} />
      
      <br/>
      
      <p className='paragraph'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti non, nostrum veniam excepturi eligendi magnam ipsa et pariatur. Expedita dignissimos earum sunt, libero sequi aut commodi laudantium velit tempora at labore, voluptatibus esse atque culpa? Aperiam, veritatis. Nesciunt odit sed sint autem totam asperiores eos quam, aut eius nihil molestiae ullam libero iste natus blanditiis saepe ab consectetur, vitae dolores cupiditate impedit animi necessitatibus accusamus fugiat! Enim deleniti ipsa delectus impedit eligendi, fugit, alias, voluptatibus eveniet quis commodi optio!
      </p>
      <br/>
      <p style={{fontWeight:"500"}}>
        <span style={{fontWeight:"500" , color:"cyan" , fontStyle:"italic"}}>
          MURSHID RAJA 
        </span>
        , Lorem ipsum dolor sit.
      </p>
    </div>
  )
}

export default Testimonials