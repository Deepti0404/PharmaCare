import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    background-color:wheat;
    align-items:center;
    justify-content:center;


`
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
`;



const Slide = styled.div`
    display:flex;
    align-items:center;
`;
const ImgContainer = styled.div`
    flex:1;
    height:60vh;
    width: 100%;
    maxWidth: 100vw;
    background-color:#ffc4c4;
    align-items:center;
    justify-content:center;
`;
const Image = styled.img`
    

`


const InfoContainer = styled.div`
    flex:1;
`;


const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>

            <ImgContainer>
                <Image src="img3.png" style={{ width: "100%", maxWidth: "60vh", margin: "auto" }}
                ></Image>
            </ImgContainer>
            <InfoContainer></InfoContainer>

            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>

        </Container>
    )
}

export default Slider