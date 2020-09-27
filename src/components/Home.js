import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const Home = () => (
    <Fragment>
        <Helmet><title>Quiz App - Anasayfa </title></Helmet> 
    <div id = "home">
        <section>
            <div style={{textAlign: 'center'}}>
                <span className = "mdi mdi-radiobox-marked book"></span>
                
            </div>
            <h1> QUIZ UYGULAMASI</h1>
        
            <div className = "play-button-container">
                <ul>
                    <li><Link className="play-button" to="/play/instructions">Oyuna Başla</Link></li>
                </ul>

            </div>
            <div className= "auth-container"></div>
        </section>
    </div>   
    </Fragment> 

    );

export default Home;