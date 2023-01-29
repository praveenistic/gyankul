import {
  Box,
  Button,
  Dialog,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useContext } from "react";
import { authenticateLogin, authenticateSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider.js";

const MainBox = styled(Box)`
  height: 80vh;
  width: 90vh;
`;
const ImgBox = styled(Box)`
  background: Darkblue
    url(https://www.papertax.in/staging/assets/images/user/login.png?v=1.1)
    center 85% no-repeat;
  height: 84.8%;
  width: 28%;
  background-size: 150px;
  padding: 40px 35px;
  color: white;
`;

const InputBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 15px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: Darkblue;
  height: 48;
  border-radius: 2px;
  color: white;
  font-weight: 600;
`;
const OtpButton = styled(Button)`
  text-transform: none;
  background: red;
  height: 48;
  border-radius: 2px;
  color: white;
  font-weight: 600;
`;

const TextBox = styled(Typography)`
  font-size: 12px;
  color: gray;
`;
const TextBox2 = styled(Typography)`
  font-size: 13px;
  color: Darkblue;
  cursor: pointer;
  text-align: center;
`;
const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Your business on clicks, Grow & help teams faster",
  },
  signup: {
    view: "signup",
    heading: "Sawagat Hai :)",
    subHeading: "Free ka samjh ke halke mein mt lena",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  phone: "",
  password: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);
  const { setAccount } = useContext(DataContext);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    const response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
        setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxHeight: "unset" } }}
    >
      <MainBox style={{ display: "flex" }}>
        <ImgBox>
          <Typography variant="h5">{account.heading}</Typography>
          <Typography style={{ marginTop: 20 }}>
            {account.subHeading}
          </Typography>
        </ImgBox>
        {account.view === "login" ? (
          <InputBox>
            <TextField
              variant="standard"
              onChange={(e) => onValueChange(e)}
              name="username"
              label="Enter Username"
            ></TextField>
            <TextField
              variant="standard"
              onChange={(e) => onValueChange(e)}
              name="password"
              label="Enter Password"
            ></TextField>
           
            {error && 
              <Typography style={{ color: "red", marginTop: 10 }}>
                Please enter valid credentials!!!
              </Typography>
            }
            
            <TextBox>
              By continuing, you are agree to Gyankul Terms of Use, Direct
              Selling Rule and Privacy Policy
            </TextBox>


            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <OtpButton>Request OTP</OtpButton>
            <TextBox2 onClick={() => toggleSignup()}>
              New to Gyankul? Create an account
            </TextBox2>

           
          </InputBox>
        ) : (
          <InputBox>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="firstname"
              label="Enter First Name"
            ></TextField>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="lastname"
              label="Enter Last Name"
            ></TextField>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
            ></TextField>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="email"
              label="Enter Email"
            ></TextField>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="phone"
              label="Enter Phone No"
            ></TextField>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
            ></TextField>
            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
          </InputBox>
        )}
      </MainBox>
    </Dialog>
  );
};

export default LoginDialog;
