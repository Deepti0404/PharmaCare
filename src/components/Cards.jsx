import React from 'react'

const styles={
//   *{
//       box-sizing:'border-box',
//   },
  divcardbody:{
      padding: '5px',
      flex:'33.33%',
      width:'33.33%',
   
  },
  imgstyle:{
     height:'100px',
     width:'100px', 
  },

  divcard:{
      display:'flex',
  }
}

const Cards = () => {
  return (
<div class="card" style={styles.divcard}>


  
  <div class="card-body" style={styles.divcardbody}>
  <img src="img9.jpeg" class="card-img-top" alt="..." style={styles.imgstyle}/>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

 
  <div class="card-body" style={styles.divcardbody}>
  <img src="img9.jpeg" class="card-img-top" alt="..." style={styles.imgstyle}/>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

  
  <div class="card-body" style={styles.divcardbody}>
  <img src="img9.jpeg" class="card-img-top" alt="..." style={styles.imgstyle}/>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>


</div>
  )
}

export default Cards
