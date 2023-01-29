import { useEffect } from "react"

import Navbar from "./Navbar"
import Banner from "./Banner"
import Slide from "./Slide"
import { styled, Box } from "@mui/material"
import { getProducts } from "../../redux/actions/productActions.js"
import { useDispatch, useSelector } from "react-redux"
import MidSlide from "./MidSlide"
import MidSection from "./MidSection"

const SBox = styled(Box)`
padding: 10px;
background:#F2F2F2;
`

const Home = () => {

const {products} =  useSelector(state => state.getProducts);

console.log(products);

const dispatch = useDispatch();
  

useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])


  return (
    <>
   <Navbar/>
   <SBox style={{justifyContent:"center", margin:"auto", alignItem:"center"}}>
   <Banner/>
   <MidSlide products={products} title="Deal of the Day" timer={true}/>
   <MidSection></MidSection>
   <Slide products={products} title="Discounts for You" timer={false}/>
   <Slide products={products} title="Suggested Items"  timer={false} />
   <Slide products={products} title="Top Selling" timer={false}/>
   <Slide products={products} title="Trending Offers" timer={false}/>
   <Slide products={products} title="Top Deals on FMCG" timer={false}/>
   </SBox>
   </>
  )
}

export default Home