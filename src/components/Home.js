import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import ImageSlider from "../components/ImageSlider";
import bb from "../bb.jpg";
import bb1 from "../bb1.jpg";
import bb2 from "../bb2.jpg";
import bb4 from "../bb4.jpg";
import bb5 from "../bb5.jpg";
import { useNavigate } from 'react-router-dom';

 const Button = styled.button`
  align items : center;
  background-color: black;
  color: white;
  font-size: 40px;
  padding: 10px 60px;
  border-radius: 10px;
  cursor: pointer;
`; 
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <GlobalStyles /> 
      <div>
        <ImageSlider images={[bb, bb1, bb2, bb4, bb5]}>
          <div>
            <Button href={"/SignIn"} onClick={() => {navigate('/SignIn')}}>
              Start Selling
            </Button>
          </div>
        </ImageSlider>
      </div>
    </>
  );
};

export default Home;