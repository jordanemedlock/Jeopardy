import React, { Component, useState } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
      this.state = {
          board: [
              {
                  index: 0,
                  category: "Alyx",
                  questions: [
                      {
                          price: 1000,
                          question: "What is Alyx's favorite color?",
                          answer: "Cobalt Blue?"
                      },
                      {
                          price: 800,
                          question: "What is Alyx's birthday",
                          answer: "August 6th, 1975"
                      },
                      {
                          price: 600,
                          question: "Where was Alyx born?",
                          answer: "El Paso, Texas"
                      }
                  ]
              },
              {
                  index: 1,
                  category: "Steve",
                  questions: [
                      {
                          price: 1000,
                          question: "What is Steve's favorite game?",
                          answer: "Fallout 4"
                      },
                      {
                          price: 800,
                          question: "What is Steve's birthday",
                          answer: "September 8th, 1975"
                      }
                  ]
              },
              {
                  index: 2,
                  category: "Geography",
                  questions: [
                      {
                          price: 1000,
                          question: "What is the capital of Norway?",
                          answer: "Oslo"
                      }
                  ]
              }
          ]
      };
  }

  render() {
    return (
      <div>
        <h1>Alyx and Steve Jeopardy!</h1>

            <table>
                <th>
                    {this.state.map((col) =>
                        <td key={col.index}>
                                {col.category}
                        </td>
                    }
                </th>
            </table>
      </div>
    );
  }
}
