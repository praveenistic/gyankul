import { Box, Button, styled } from "@mui/material";

import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm.js";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
  width: "95%",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: 50,
  borderRadius: 2,
  [theme.breakpoints.down("lg")]: {
    widht: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    widht: "48%",
  },
}));

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };
  const buyNow = async () => {
    let response = await payUsingPaytm({ amount: 10, email: 'praveensharmakanina@gmail.com'});
    var information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response    
    };
    post(information);
}

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 15px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.url} alt="productImage" />
      </Box>

      <StyledButton
        variant="contained"
        onClick={() => addItemToCart()}
        style={{ marginRight: 10, background: "Darkorange" }}
      >
        <Cart />
        Add to cart
      </StyledButton>
      <StyledButton
        onClick={() => buyNow()}
        variant="contained"
        style={{ background: "red" }}
      >
        <Flash />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
