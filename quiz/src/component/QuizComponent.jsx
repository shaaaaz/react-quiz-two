import { Component } from "react"
import Questions from '../resources/Questions.json'

class QuizComponent extends Component {

    constructor(){
        super()
        this.state = {
            number : 0
        }
    }

    render() {

        let currQuestion = Questions[this.state.number]
        let currentQuestionNumber = this.state.number

        let handlePrevious = () => {

            if(currentQuestionNumber == 0){
                alert("THIS IS THE FIRST QUESTION")
            }
            else{
                this.setState({
                    number : currentQuestionNumber - 1
                })
            }
        }

        let handleNext = () => {

            if(currentQuestionNumber == 14){
                alert("THIS IS THE LAST QUESTION")
            }
            else{
                this.setState({
                    number : currentQuestionNumber + 1
                })
            }
        }

        let handleQuit = () => {
            alert("Hello")
        }

        console.log(currQuestion)
        return (
            <>
                <div className="home">
                    <div className="whiteArea">
                        <div className="question">
                            Question
                        </div>

                        <div className="number">
                            {this.state.number + 1} of 15
                        </div>

                        <div className="questionText">
                            {currQuestion.question}
                        </div>

                        <div className="entire">
                            <div className="options">
                                <div className="part1">
                                    <div className="option">{currQuestion.optionA}</div>
                                    <div className="option">{currQuestion.optionB}</div>
                                </div>
                                <div className="part2">
                                    <div className="option">{currQuestion.optionC}</div>
                                    <div className="option">{currQuestion.optionD}</div>
                                </div>
                            </div>
                        </div>

                        <div className="buttonArea">
                            <button className="buttonBlue buttons"
                                    onClick={handlePrevious}>
                                        
                                        Previous

                            </button>

                            <button className="buttonGreen buttons"
                                    onClick={handleNext}>
                                
                                Next
                                
                            </button>

                            <button className="buttonRed buttons"
                                    onClick={handleQuit}>
                                        
                                        Quit
                                        
                            </button>

                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default QuizComponent