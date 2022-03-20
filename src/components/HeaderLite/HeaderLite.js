import React, {Component ,useEffect,useState } from 'react';
import styles from './HeaderLite.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../constants/actionTypes';


function HeaderLite () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isOpen , setIsOpen] = useState(false);
  const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')))
  } , [location]) 
  

  const logout = () =>{
    dispatch( {type: LOGOUT});
    navigate('/');
    setUser(null);

}
  return(
    <div className={styles.HeaderLite}>
        <header>
          <div className="container-md">
              <div className="row">
                  <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                      <Link to="/" className="navbar-brand" href="#"><h1 className={styles.easyMLTitle}>EasyML</h1></Link>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul id="linkDiv" className="navbar-nav ml-auto">
                          <li className="nav-item active">
                          <Link className={styles.linkSignIn} to={`/`}> 
                            <div className="nav-link" ><span className={styles.navLink}><span className="link-nav-bar">Home</span></span></div>
                            </Link>
                          </li>
                          <li className="nav-item active">
                          <Link className={styles.linkSignIn} to={`/models`}> 
                            <div className="nav-link" ><span className={styles.navLink}><span className="link-nav-bar">Models</span></span></div>
                            </Link>
                          </li>
                          <li className="nav-item active">
                          <Link className={styles.linkSignIn} to={`/experts`}> 
                            <div className="nav-link" ><span className={styles.navLink}><span className="link-nav-bar">Experts</span></span></div>
                            </Link>
                          </li>
                          <li className="nav-item active">
                          <Link className={styles.linkSignIn} to={`/blogs`}> 
                            <div className="nav-link" ><span className={styles.navLink}><span className="link-nav-bar">Blogs</span></span></div>
                            </Link>

                          </li>
                           
                          {user ? (
                          <><li className={styles.btnSingIn}>
                        <Link className={styles.linkSignIn} to={`/signin`} onClick={logout}>
                          <div className="nav-link"><span className='text-light' >Logout</span></div>
                        </Link>
                      </li></> )
                    : (
                      <li className={styles.btnSingIn}>
                            <Link className={styles.linkSignIn} to={`/signin`}> 
                              <div className="nav-link" ><span className='text-light'>Sing in</span></div>
                            </Link>
                          </li>
                    ) }
                        </ul>
                      </div>
                    </nav>
                  </div>
              </div>
          </div>
        </header>
      </div>
  )
};


  
  



export default HeaderLite;
