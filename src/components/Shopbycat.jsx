import React from 'react'
const style={
    imgtag:{
           height:'25px',
           width:'30px', 
    },
    cardtag:{
        display:'flex',
        paddingleft:'50px',
        height:'300px',
        width:'300px',
    }

}
const Shopbycat = () => {
  return (
    <div class="row">

    <div class="col-12" style={style.cardtag}>
      <div class="card m-4">
        <div class="card-body">
        <img src='card1.jpeg' style={style.imgtag}></img>
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  
  
    <div class="col-12" style={style.cardtag}>
      <div class="card m-4">
        <div class="card-body">
            <img src='card2.jpeg' style={style.imgtag}></img>
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="HealthcareStore.jsx" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  
    <div class="col-12" style={style.cardtag}>
      <div class="card m-4">
        <div class="card-body">
        <img src='card1.jpeg' style={style.imgtag}></img>
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>


      <div class="col-12" style={style.cardtag}>
      <div class="card m-4">
        <div class="card-body">
        <img src='card1.jpeg' style={style.imgtag}></img>
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>


    <div class="col-12" style={style.cardtag}>
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

/* <div class="card border-light mb-3">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */

  




  )
}

export default Shopbycat
