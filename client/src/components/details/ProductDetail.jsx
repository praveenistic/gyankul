import { Box, styled, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";


const SmallText = styled(Box)`
font-size:14px;
vertical-align: baseline;
& > p {
    font-size:14px;
    margin-top:10px;
    
}
`

const StyledBadge = styled(Badge)`
margin-right:10px;
color: green;
font-size:15px;
`

const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;
&> td {
    font-size:14px;
    margin-top:10px;
    border: none;
}


`



const ProductDetail = ({ product }) => {
    const date = new Date(new Date().getTime()+(5*25*60*60*1000))
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Ratings & 1 Review{" "}
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp; &nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp; &nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.price.discount}
        </Box>
      </Typography>

      <Typography>Available Offers</Typography>
      <SmallText>

        <Typography>
          <StyledBadge />
          Get Extra 10% Cashback on each T&C
        </Typography>

        <Typography>
          <StyledBadge />
          Become a Verified User & Performance Bonus From 3 to 21% T&C
        </Typography>
        
        <Typography>
          <StyledBadge />
          Buy 6 Get 1 Free T&C
        </Typography>

        <Typography>
          <StyledBadge />
          Free home delivery on purchase of 50PV
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                <TableCell style={{fontWeight:600}}>Delivery By {date.toDateString()} | ₹60/Kg</TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                <TableCell style={{fontWeight:600}}>100% Satisfaction or MoneyBack T&C</TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Seller</TableCell>
                <TableCell style={{fontWeight:600}}>Gyankul
                <Typography>GST Invoice Availble</Typography>
                </TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{color:'#878787'}}>Description</TableCell>
                <TableCell style={{fontWeight:600}}>{product.description}</TableCell>
            </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
