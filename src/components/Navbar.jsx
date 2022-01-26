import React from 'react'


const styling={
  atag:{
    color:"white",
    fontFamily:"sans-serif",
  },
  auth:{
    color:"white",
    display: 'flex', justifyContent: 'flex-end',
    // marginLeft:"auto"
  }
  
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg " style={{backgroundColor: "#00c2cb"}}>
  <div className="container-fluid">
  {/* <span class="navbar-brand mb-0 h1">Navbar</span> */}
  {/* <img src='logo1.png' height={108} width={108}/> */}
    <a className="navbar-brand" href="#" style={styling.atag}><b>PharmaCare</b></a>
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-dark" type="submit">Search</button>
      </form>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={styling.auth} >Sign In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={styling.auth}>Register</a>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={styling.atag}>
            <h4>Dropdown</h4>

          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>

        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      

    </div>
  </div>
</nav>
  )
}

export default Navbar
