import Slide from './Slide'
import {Box, styled} from '@mui/material'

const Component =styled(Box)`
display:flex;
`
const LeftComponent = styled(Box)(({theme}) => ({

    width:'83%',
    [theme.breakpoints.down('md')]:{ width:'100%'}
}));


const RightComponent = styled(Box)(({theme})=>({
background: '#FFFFFF',
padding:5,
marginTop:10,
marginLeft:10,
width:'16%',
textAlign:'center',

[theme.breakpoints.down('md')]:{
    display:'none'
}
}));

const MidSlide = ({products, title, timer}) => { 

    const adURL = 'https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/319331706_1437825036748126_4151439847809585041_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=TLD1CzAcHfcAX8FaH8-&_nc_ht=scontent-del1-2.xx&oh=00_AfCRWwgXV3g735e6zPKTP58nB1KVABg5yW5tXpM6HF4gww&oe=63C403C6';
    return (
        <Component>
            <LeftComponent>
                <Slide products={products} title={title} timer={timer} />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt='addimage' style={{width:200}}/>
            </RightComponent>
        </Component>
    )

};

export default MidSlide;