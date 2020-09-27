import React, { Component, Fragment } from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

class QuizSummary extends Component{
    constructor (props) {
        super(props);
        this.state = {
            score : 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions : 0,
            correctAnswers: 0,
            wrongAnswers : 0,
            hintsUsed: 0,
            fiftyFiftyUsed: 0
        };
    }

    componentDidMount () {
        const {state} = this.props.location;
        if(state){
            this.setState({
                score: (state.score / state.numberOfQuestions) * 100,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestions : state.numberOfAnsweredQuestions,
                correctAnswers: state.correctAnswers,
                wrongAnswers : state.wrongAnswers,
                hintsUsed: state.hintsUsed,
                fiftyFiftyUsed: state.fiftyFiftyUsed
            });

        }
        
    }
    render(){
        const { state} = this.props.location;
        let stats, remark;
        const userScore = this.state.score;

        if(userScore<=30){
            remark = 'Daha fazla pratik yapmalısın !';
        }else if (userScore >30 && userScore <=50){
            remark = 'Bir dahaki sefere iyi şanslar!';
        }else if(userScore <=70 && userScore >50){
            remark = 'Daha iyi yapabilirsin!';
        }else if(userScore >=71 && userScore <=84){
            remark = 'Harika bir sonuç!';
        }else {
            remark = 'Sen bir dahisin';
        }

        if(state !== undefined){
            stats = (
                <Fragment>
                        <div className = "container stats">
                        <h4>{remark}</h4>
                        <h2>Puanın: {this.state.score.toFixed(0)} &#37;</h2>
                        <span className = "stat left">Toplam soru sayısı: </span>
                        <span className = " right"> {this.state.numberOfQuestions}</span><br/>

                        <span className = "stat left">Cevaplanan soru sayısı: </span>
                        <span className = "right"> {this.state.numberOfAnsweredQuestions}</span><br/>

                        <span className = "stat left">Doğru cevaplanan soru sayısı : </span>
                        <span className = "right"> {this.state.correctAnswers}</span><br/>

                        <span className = "stat left">Yanlış cevaplanan soru sayısı:  </span>
                        <span className = "right"> {this.state.wrongAnswers}</span><br/>

                        <span className = "stat left">Kullanılan ipucu sayısı : </span>
                        <span className = "right"> {this.state.hintsUsed}</span><br/>
                        
                        <span className = "stat left">Kullanılan yarı yarıya joker hakkı : </span>
                        <span className = "right"> {this.state.fiftyFifty}</span><br/>

                        

                    </div>

                    <section>
                        <ul>
                            <li>
                                <Link to = "/"> Anasayfaya Dön</Link>
                            </li>
                            <li>
                                <Link to = "/play/quiz">Tekrar Oyna</Link> 
                            </li>
                        </ul>
                    </section>
                </Fragment>
            );
        }else{
            stats = (
                <section>
                <h1 className = "no-stats"> No statistic available</h1>
                <ul>
                  <li>
                    <Link to = "/"> Back to Home</Link>
                  </li>
                  <li>
                    <Link to = "/play/quiz">Take a quiz</Link> 
                  </li>
                </ul>
                </section>
             
            );
        }
        return (
            <Fragment>
                <Helmet><title>Quiz App - Summary</title></Helmet>
                <div className = "quiz-summary">
                 {stats}
                </div>
                
            </Fragment>
        )
    }
}

export default QuizSummary;