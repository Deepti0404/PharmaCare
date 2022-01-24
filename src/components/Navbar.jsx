import { Badge } from '@material-ui/core';
import { AddShoppingCartOutlined, Search } from '@material-ui/icons';
import React from 'react'

const styles = {
    searchBar : {
        borderRadius : "4px",
        outline : 'none',
        paddingRight : '30px',
        border : '1px solid rgba(0, 0, 0, 0.4)',
    },
    
    searchBtn : {
        width : '50px',
        marginLeft : '-50px',
        cursor : 'pointer',
    },
}

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand text-dark" href="#">PharmaCare</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Sign In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Register</a>
                        </li>
                    </ul>
                    <form onSubmit={
                        event => {
                            event.preventDefault();
                            console.log('form submitted');
                        }
                    } className="w-25 d-flex align-items-center">
                        <input className="w-100 me-2" style={styles.searchBar} />
                        <Search style={styles.searchBtn} onClick={
                            () => {
                                console.log('form submitted');
                            }
                        } />
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
