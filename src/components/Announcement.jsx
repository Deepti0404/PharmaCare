
import styled from "styled-components";

const Container = styled.div`
    height:100px;
    background-color:#008037;
    color:black;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:30px;
    font-weight:500;
    font-style:sans-serif;
    
`

const Announcement = () => {
  return (
    <Container>
      <b>Get Vaccinated NOW! Stay Safe.. Stay Strong!</b>
    </Container>
  )
}

export default Announcement

