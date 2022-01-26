
import React from 'react'


const style={
    imgtag:{
           height:'225px',
           width:'360px', 
    }
}

const Cards = () => {
  return (
    <div class="row">
  <div class="col-sm-4">
    <div class="card m-4">
      <div class="card-body">
      <img src='card1.jpeg' style={style.imgtag}></img>
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>


  <div class="col-sm-4">
    <div class="card m-4">
      <div class="card-body">
          <img src='card2.jpeg' style={style.imgtag}></img>
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <div class="card m-4">
      <div class="card-body">
      <img src='card1.jpeg' style={style.imgtag}></img>
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>


</div>



  )
}

export default Cards
