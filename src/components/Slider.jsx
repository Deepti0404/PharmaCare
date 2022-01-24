import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState, useEffect } from "react";
import styled from "styled-components"
import { Button } from "@material-ui/core";

const Container = styled.div`
    display:flex;
    align-items : center;
    justify-content : center;
`;

const Wrapper = styled.div`
    height:60vh;
    width:100%;
    maxWidth:100vw;
    display:flex;
    justify-content:sapce-between;
    align-items:center;
    background:black;
`;

const Slide = styled.div`
    background : ${props => props.bg};
    height : 100%;
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
`;

const styles = {
    bannerImg: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
}

const Slider = () => {
    const picSrcs = [["img3.png", "#ffc4c4"], ["img5.jpeg", "#f8f8f8"], ["img2.png", "#ffc4c4"]]
    // let index = 0;
    const [index, setIndex] = useState(0)

    return (
        <Container>
            <Button onClick={
                () => {
                    setIndex((index + 2) % 3);
                    console.log(`prev ${index}`);
                }
            }>
                <ArrowLeftOutlined />
            </Button>

            <Wrapper>
                <Slide bg={picSrcs[index][1]}>
                    <img style={styles.bannerImg} src={picSrcs[index][0]} />
                </Slide>
            </Wrapper>

            <Button onClick={
                () => {
                    setIndex((index + 1) % 3);
                    console.log(`next ${index}`);
                }
            }>
                <ArrowRightOutlined />
            </Button>

        </Container>
    )
}

export default Slider



