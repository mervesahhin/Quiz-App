import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

import elli from '../../assets/img/elli.jpg';
import hint from '../../assets/img/hint.jpg';
import bir from '../../assets/img/1.png';
import iki from '../../assets/img/2.png';
import uc from '../../assets/img/3.png';
import dort from '../../assets/img/4.png';

const QuizInstructions = () => (
   <Fragment>
       <Helmet><title> Quiz Talimatları - Quiz App</title></Helmet>
       <div className = "instruction container">
           <h1>Nasıl oynanır ? </h1>
           <p>Bu kılavuzu baştan sona okuduğunuzdan emin olun.</p>
           <u1 className = "browser-default" id="main-list">
               <li>Oyunun süresi 15 dakikadır ve zamanınız dolduğunda biter.</li>
               <li>Her oyun 15 sorudan oluşur.</li>
               <li>
                    Her soru 4 seçenek içerir.
                   <img src ={bir} alt ="Quiz App options example"/>
               </li>
               <li>
                    Soru için doğru seçeneği seçin.
                   <img src = {iki} alt="Quiz app answer example"/>
               </li>
               <li>
                  Her oyunda  joker hakkları bulunur.
                   <u1 id= "sublist">
                       <li>2 tane yarı yarıya jokeri</li>
                       <li>5 yanlış şıkkı eleme jokeri</li>
                   </u1>
               </li>
               <li> 
                   İkona tıklayarak 50-50 jokerini seçmek
                   <span className= "mdi mdi-set-center mdi-24px lifeline-icon"></span>
                     doğru cevabı ve bir yanlış cevabı bırakarak 2 yanlış cevabı kaldıracaktır.
                       <img src={uc} alt="Quiz App Fifty-fifty example"/>                 
               </li>
               <li> 
                   Simgeyi tıklayarak bir ipucu kullanma
                   <span className = "mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
                   iki yanlış yanıtı ve bir doğru yanıtı bırakarak bir yanlış yanıtı kaldıracaktır. Tek bir soruda mümkün olduğunca çok ipucu kullanabilirsiniz.
                   <img src = {dort} alt = "Quiz app hints example"/>
               </li>
               <li>İstediğiniz zaman oyundan çıkabilirsiniz. Bu durumda puanınız sonradan ortaya çıkacaktır. </li>
               <li>Zamanlayıcı oyun yüklenir yüklenmez başlar.</li>
           </u1>
           <div>
               <span className ="left"><Link to="/">Anasayfaya Geri Dön</Link></span>
               <span className ="right"><Link to="/play/quiz">Oyuna Başla</Link></span>
               
           </div>
       </div>
   </Fragment>
);

export default QuizInstructions;