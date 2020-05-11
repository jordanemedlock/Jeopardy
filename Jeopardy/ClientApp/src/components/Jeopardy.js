import React, { Component } from 'react';
import { Modal, ModalBody, Button } from 'reactstrap';
import './Jeopardy.css'

const AnsweredQuestion = (props) => {
    return (
        <div className="question answered" onClick={props.onClick}>
            <div>{props.answer}</div>
        </div>
    );
}

const OpenedQuestion = (props) => {
    return (
        <div className="question opened" onClick={props.onClick}>
            <div>{props.question}</div>
        </div>
    );
}

const UnopenedQuestion = (props) => {
    return (
        <div className="question unopened" onClick={props.onClick}> 
            <div>${props.price}</div>
        </div>
    );
}

const EmptyQuestion = (props) => {
    return null;
}

const Question = (props) => {
    if (!props.question.question) {
        return <EmptyQuestion />;
    } else if (!props.question.state || props.question.state === "unopened") {
        return <UnopenedQuestion price={props.question.price} onClick={props.onClick}/>;
    } else if (props.question.state === "opened") {
        return <OpenedQuestion question={props.question.question} onClick={props.onClick}/>;
    } else if (props.question.state === "answered") {
        return <AnsweredQuestion answer={props.question.answer} onClick={props.onClick}/>;
    }
}

const Category = (props) => {
    return (
        <div className="category">
            {props.category}
        </div>
    );
}

const TeamButtons = (props) => {
    let teamsButtons = props.teams.map((team, index) => (
        <div className={`${index == 0 && "offset-md-2"} col-md-1 jpdy-btn`} key={index} onClick={() => props.handleTeamWon(index)}>{team.name}</div>
    ));
    return (
        <>
            {teamsButtons}
            <div className="col-md-1 jpdy-btn" onClick={props.handleNoTeamWon}>No Team</div>
        </>
    );
}

const AnswerBox = (props) => {
    return (
        <>
            <div className="row">
                <h2 className="col-md-12">{props.answer}</h2>
            </div>
            <div className="row">
                <TeamButtons teams={props.teams} handleTeamWon={props.handleTeamWon} handleNoTeamWon={props.handleNoTeamWon} />
            </div>
        </>
    );
}

export class Jeopardy extends Component {
    static displayName = Jeopardy.name;

    constructor(props) {
        super(props);
        this.state = {
            open: null,
            teams: [
                {
                    name: "Group 1",
                    score: 0,
                },
                {
                    name: "Group 2",
                    score: 0,
                },
                {
                    name: "Group 3",
                    score: 0,
                },
                {
                    name: "Group 4",
                    score: 0,
                },
                {
                    name: "Group 5",
                    score: 0,
                },
                {
                    name: "Group 6",
                    score: 0,
                },
                {
                    name: "Group 7",
                    score: 0,
                },
            ],
            board: [
                {
                    category: "Avengers",
                    questions: [
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 1000,
                        },
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 500,
                        },
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 100,
                        }
                    ]
                },
                {
                    category: "Science",
                    questions: [
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 1000,
                        },
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 500,
                        },
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 100,
                        }
                    ]
                },
                {
                    category: "Hiking",
                    questions: [
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 1000,
                        },
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 500,
                        },
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 100,
                        }
                    ]
                },
                {
                    category: "Biking",
                    questions: [
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 1000,
                        },
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 500,
                        },
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 100,
                        }
                    ]
                },
                {
                    category: "Cooking",
                    questions: [
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 1000,
                        },
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 500,
                        },
                        {
                            question: "Something",
                            answer: "Some Answer",
                            price: 100,
                        }
                    ]
                }
            ]
        };
    }

    flippedBoard = () => {
        let rows = []
        let keepGoing = true;
        for (let y = 0; keepGoing; y++) {
            let row = []
            let rowHasElem = false;
            for (let x = 0; x < this.state.board.length; x++) {
                let cat = this.state.board[x];
                if (y < cat.questions.length) {
                    row.push(cat.questions[y]);
                    rowHasElem = true;
                } else {
                    row.push({});
                }
            }
            if (rowHasElem) {
                rows.push(row);
            } else {
                keepGoing = false;
            }
        }
        return rows;
    }

    questionClicked = (rowNum, colNum, question) => {
        this.setState((state) => ({
            ...state,
            open: {
                rowNum,
                colNum,
                question
            }
        }));
    }

    handleHideModal = () => {
        this.setState((state) => ({
            ...state,
            open: null,
            board: state.board.map((col, colIndex) => ({
                ...col,
                questions: col.questions.map((q, rowIndex) => (
                    colIndex == state.open.colNum && rowIndex == state.open.rowNum ? {} : q
                ))
            }))
        }))
    }

    handleClickModal = () => {
        this.setState((state) => ({
            ...state,
            open: {
                ...state.open,
                answered: true
            }
        }))
    }
    handleTeamWon = (index) => {
        this.setState((state) => ({
            ...state,
            teams: state.teams.map((team, teamIndex) => ({
                ...team,
                score: team.score + (teamIndex == index ? state.open.question.price : 0)
            }))
        }))
        this.handleHideModal()
    }

    render() {
        let flippedBoard = this.flippedBoard();
        let rows = flippedBoard.map((row, rowNum) =>
            <div className="row" key={rowNum}>
                {row.map((value, colNum) =>
                    <div className={`col-md-2 ${colNum===0 && "offset-md-1"}`} key={colNum}>
                        <Question question={value} onClick={() => this.questionClicked(rowNum, colNum, value)} />
                    </div>
                )}
            </div>
        );
        return (
            <div>
                <h1>Alyx and Steve Jeopardy!</h1>
                <div className="row">
                    <div className="col-md-10">
                        <div className="row">
                            {this.state.board.map((col, index) =>
                                <div className={`col-md-2 ${index == 0 && "offset-md-1"}`} key={index}>
                                    <Category category={col.category} />
                                </div>
                            )}
                        </div>
                        {rows}
                    </div>
                    <div className="col-md-2">
                        <div className="category">
                            Teams
                        </div>
                        {this.state.teams.map((team, index) => (
                            <div key={index} className="row team-row">
                                <div className="col-md-6">{team.name}: </div>
                                <div className="col-md-6">${team.score}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <Modal isOpen={this.state.open != null} onExit={this.handleHideModal} size="lg">
                    <ModalBody>
                        <div className="row">
                            <h1 className="question-header col-md-12">{this.state.open && this.state.open.question.question}</h1>
                        </div>
                        <div className="row">
                            <div className="offset-md-2 col-md-8 jpdy-btn" onClick={this.handleClickModal}>Show Answer</div>
                        </div>
                        {this.state.open && this.state.open.answered && (
                            <AnswerBox
                                answer={this.state.open.question.answer}
                                teams={this.state.teams}
                                handleTeamWon={this.handleTeamWon}
                                handleNoTeamWon={this.handleHideModal}
                            />
                        )}
                    </ModalBody>
                </Modal>
                
            </div>
        );
    }
}