import React from "react";
import { Link } from "react-router-dom";
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import ListItemIcon from '@mui/material/ListItemIcon';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

function Content() {
    return (
        <div>
            <div className="container content">
                <div className="row align-items-center">
                    <div className="col-12 col-md-3  talk">
                        <h2>Welcome to</h2>
                        <h2>Continental Housing Society</h2>
                        <p>If you really believe that you're making a difference and that you can leave a legacy of better schools and
                            jobs and safer streets, why would you not spend the money? The objective is to improve the schools,
                            bring down crime, build affordable housing, clean the streets - not to have a fair fight.</p>
                        <br />
                        <h6>
                            {/* <a className="btn btn-dark start start-two">Login Here!</a> */}
                            <Link
                                style={{backgroundColor: '#372F7F'}}
                                className="btn  start start-two startbtn"
                                to="/login">
                                Login Here!
                            </Link>
                        </h6>
                    </div>
                    <div className="col-12 col-md-9 showcase-img">
                      <img src="./images/reading-woman.png" width="100%" alt="demo img"/>
                    </div>
                </div>
            </div>

            <section class="features-icons bg-light text-center det-ails">
                <div class="container">
                    <div class= "row">
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails " style={{ justifyContent:'center',
                            padding:'8px'}}>
                                    {/* <i class="icon-screen-desktop m-auto text-primary icon-ails"></i> */}
                                    <ListItemIcon>
                                                <DesktopMacIcon fontSize="large" />
                                    </ListItemIcon>
                                </div>
                                <h5>Tech Fest</h5>
                                <p class="lead mb-0">You never change things by fighting the existing reality.
                                    To change something, build a new model that makes the existing model obsolete. </p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails"style={{ justifyContent:'center',
                            padding:'8px'}}>
                                <ListItemIcon>
                                <HomeWorkIcon fontSize="large" />
                                </ListItemIcon>
                                    {/* <i class="icon-layers m-auto text-primary icon-ails"></i> */}
                                </div>
                               

                                <h5>Stock House</h5>
                                <p class="lead mb-0">Should you find yourself in a chronically leaking boat,
                                    energy devoted to changing vessels is likely to be more productive than energy
                                    devoted to patching leaks.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails" style={{ justifyContent:'center',
                            padding:'8px'}}>
                                <ListItemIcon>
                                <GroupAddIcon fontSize="large" />
                                </ListItemIcon>
                                    {/* <i class="icon-check m-auto text-primary icon-ails"></i> */}
                                </div>
                                <h5>Successful Memeber</h5>
                                <p class="lead mb-0">Individual commitment to a group effort--that is what makes a
                                    team work, a company work, a society work, a civilization work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Content;