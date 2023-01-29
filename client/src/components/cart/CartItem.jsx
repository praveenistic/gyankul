import { Box, Button, styled, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import { addEllipsis } from "../../utils/common-utils";
import GroupedButton from "./ButtonGroup";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
`;

const LeftContainer = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <Component>
      <LeftContainer>
        <img src={item.url} alt="product" style={{ width: 150 }} />
        <GroupedButton />
      </LeftContainer>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <Typography>{item.title.shortTitle}</Typography>
        <Typography style={{ margin: "20px 0" }}>
          <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>
            ₹{item.price.cost}
          </Box>
          &nbsp; &nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp; &nbsp;
          <Box component="span" style={{ color: "#388E3C" }}>
            {item.price.discount}
          </Box>
        </Typography>
        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};

export default CartItem;
