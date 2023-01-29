import { navData } from "../../resources/Data";
import { Box, styled } from "@mui/material";

const Sbox = styled(Box)(({ theme }) => ({
  display:'flex',
  margin:'75px 130px 0 130px',
  justifyContent:'space-between',
  textAlign:'center',
  overflow:'overlay',
  [theme.breakpoints.down('lg')]:{
    margin:'65px 0 0 0'
    
  }
}));




const Navbar = () => {
  return (
    // <Box style={{background:'#fff'}}>
    <Sbox>
      {navData.map((data) => (
        <Box>
          <img src={data.url} alt={data.text} style={{width:100}}/>
          <p style={{marginTop:0, fontSize:14, fontFamily:"inherit"}}>{data.text} </p>
        </Box>
      ))}
    </Sbox>
    // </Box>
  );
};

export default Navbar;
