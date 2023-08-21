import React from "react";
// import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";


const Home=()=>{

    const data={
        name:"VIJAY Store",
    };

    return(
        <>
        <HeroSection myData={data}/>
        <FeatureProduct/>
        <Services/>
        <Trusted/>
        
        </>
    )
};

// const Wrapper=styled.section`
//     background-color:${({theme})=>theme.colors.bg};
//     // width:20rem;
//     height:100vh;
// `;

export default Home;
