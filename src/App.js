import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap'
import validator from 'validator'

class App extends Component {

  ob = {
    "DT_Sheet": {
      "decision_name": "",
      "id": 0,
      "intent_name": "N/A",
      "is_decision_node": true,
      "parent_id": "N/A",
      "path_names": [
        "SELL",
        "LET"
      ],
      "sub": [
        {
          "decision_name": "SELL",
          "id": 145,
          "intent_name": "sell",
          "is_decision_node": false,
          "parent_id": 0,
          "path_display_names": {

          },
          "path_names": [

          ],
          "responses": [
            "That's great. May I take your name, please?"
          ],
          "rootPath": "SELL",
          "sub": [
            {
              "decision_name": "",
              "id": 146,
              "intent_name": "nameProvided",
              "is_decision_node": false,
              "parent_id": 145,
              "path_display_names": {

              },
              "path_names": [

              ],
              "responses": [
                "Can I also have the address of the property, please?"
              ],
              "rootPath": "SELL",
              "sub": [
                {
                  "decision_name": "",
                  "id": 147,
                  "intent_name": "addressProvided",
                  "is_decision_node": true,
                  "parent_id": 146,
                  "path_display_names": {
                    "emailprovided": "EMAIL PROVIDED",
                    "phonenumberprovided": "PHONE NUMBER PROVIDED"
                  },
                  "path_names": [
                    "phonenumberprovided",
                    "emailprovided"
                  ],
                  "responses": [
                    "Just so that you know, Savills will use your personal data to respond to your enquiry. For details, you can see our Privacy Notice on our website savills.co.uk. May I have your contact number and email address, please?"
                  ],
                  "rootPath": "SELL",
                  "sub": [
                    {
                      "decision_name": "PHONE NUMBER PROVIDED",
                      "id": 148,
                      "intent_name": "phoneProvided",
                      "is_decision_node": false,
                      "parent_id": 147,
                      "path_display_names": {

                      },
                      "path_names": [

                      ],
                      "responses": [
                        "A member of the team will be in touch with regards to your enquiry as soon as possible.",
                        "Thank you for the details. I will pass this information to the appropriate team and they will be in touch shortly. Is there anything else that I can help you with today?"
                      ],
                      "rootPath": "SELL",
                      "sub": [
                        {
                          "decision_name": "",
                          "id": 153,
                          "intent_name": "deny",
                          "is_decision_node": false,
                          "parent_id": 148,
                          "path_display_names": {

                          },
                          "path_names": [

                          ],
                          "responses": [
                            "It was a pleasure chatting with you. Thank you and goodbye."
                          ],
                          "rootPath": "SELL",
                          "sub": [

                          ],
                          "to_node": 5,
                          "to_path": 3,
                          "to_subnode": 1
                        }
                      ],
                      "to_node": 4,
                      "to_path": 3,
                      "to_subnode": 1
                    },
                    {
                      "decision_name": "EMAIL PROVIDED",
                      "id": 150,
                      "intent_name": "emailProvided",
                      "is_decision_node": false,
                      "parent_id": 147,
                      "path_display_names": {

                      },
                      "path_names": [

                      ],
                      "responses": [
                        "A member of the team will be in touch with regards to your enquiry as soon as possible.",
                        "Thank you for the details. I will pass this information to the appropriate team and they will be in touch shortly. Is there anything else that I can help you with today?"
                      ],
                      "rootPath": "SELL",
                      "sub": [
                        {
                          "decision_name": "",
                          "id": 154,
                          "intent_name": "deny",
                          "is_decision_node": false,
                          "parent_id": 150,
                          "path_display_names": {

                          },
                          "path_names": [

                          ],
                          "responses": [
                            "It was a pleasure chatting with you. Thank you and goodbye."
                          ],
                          "rootPath": "SELL",
                          "sub": [

                          ],
                          "to_node": 5,
                          "to_path": 3,
                          "to_subnode": 2
                        }
                      ],
                      "to_node": 4,
                      "to_path": 3,
                      "to_subnode": 2
                    }
                  ],
                  "to_node": 3,
                  "to_path": 3,
                  "to_subnode": 1
                }
              ],
              "to_node": 2,
              "to_path": 3,
              "to_subnode": 1
            }
          ],
          "to_node": 1,
          "to_path": 3,
          "to_subnode": 1
        },
        {
          "decision_name": "LET",
          "id": 155,
          "intent_name": "let",
          "is_decision_node": false,
          "parent_id": 0,
          "path_display_names": {

          },
          "path_names": [

          ],
          "responses": [
            "That's great. May I take your name, please?"
          ],
          "rootPath": "LET",
          "sub": [
            {
              "decision_name": "",
              "id": 156,
              "intent_name": "nameProvided",
              "is_decision_node": false,
              "parent_id": 155,
              "path_display_names": {

              },
              "path_names": [

              ],
              "responses": [
                "Can I also have the address of the property, please?"
              ],
              "rootPath": "LET",
              "sub": [
                {
                  "decision_name": "",
                  "id": 157,
                  "intent_name": "addressProvided",
                  "is_decision_node": true,
                  "parent_id": 156,
                  "path_display_names": {
                    "emailprovided": "EMAIL PROVIDED",
                    "phonenumberprovided": "PHONE NUMBER PROVIDED"
                  },
                  "path_names": [
                    "phonenumberprovided",
                    "emailprovided"
                  ],
                  "responses": [
                    "Just so that you know, Savills will use your personal data to respond to your enquiry. For details, you can see our Privacy Notice on our website savills.co.uk. May I have your contact number and email address, please?"
                  ],
                  "rootPath": "LET",
                  "sub": [
                    {
                      "decision_name": "PHONE NUMBER PROVIDED",
                      "id": 158,
                      "intent_name": "phoneProvided",
                      "is_decision_node": false,
                      "parent_id": 157,
                      "path_display_names": {

                      },
                      "path_names": [

                      ],
                      "responses": [
                        "A member of the team will be in touch with regards to your enquiry as soon as possible.",
                        "Thank you for the details. I will pass this information to the appropriate team and they will be in touch shortly. Is there anything else that I can help you with today?"
                      ],
                      "rootPath": "LET",
                      "sub": [
                        {
                          "decision_name": "",
                          "id": 162,
                          "intent_name": "deny",
                          "is_decision_node": false,
                          "parent_id": 158,
                          "path_display_names": {

                          },
                          "path_names": [

                          ],
                          "responses": [
                            "It was a pleasure chatting with you. Thank you and goodbye."
                          ],
                          "rootPath": "LET",
                          "sub": [

                          ],
                          "to_node": 5,
                          "to_path": 4,
                          "to_subnode": 1
                        }
                      ],
                      "to_node": 4,
                      "to_path": 4,
                      "to_subnode": 1
                    },
                    {
                      "decision_name": "EMAIL PROVIDED",
                      "id": 160,
                      "intent_name": "emailProvided",
                      "is_decision_node": false,
                      "parent_id": 157,
                      "path_display_names": {

                      },
                      "path_names": [

                      ],
                      "responses": [
                        "A member of the team will be in touch with regards to your enquiry as soon as possible.",
                        "Thank you for the details. I will pass this information to the appropriate team and they will be in touch shortly. Is there anything else that I can help you with today?"
                      ],
                      "rootPath": "LET",
                      "sub": [
                        {
                          "decision_name": "",
                          "id": 163,
                          "intent_name": "deny",
                          "is_decision_node": false,
                          "parent_id": 160,
                          "path_display_names": {

                          },
                          "path_names": [

                          ],
                          "responses": [
                            "It was a pleasure chatting with you. Thank you and goodbye."
                          ],
                          "rootPath": "LET",
                          "sub": [

                          ],
                          "to_node": 5,
                          "to_path": 4,
                          "to_subnode": 2
                        }
                      ],
                      "to_node": 4,
                      "to_path": 4,
                      "to_subnode": 2
                    }
                  ],
                  "to_node": 3,
                  "to_path": 4,
                  "to_subnode": 1
                }
              ],
              "to_node": 2,
              "to_path": 4,
              "to_subnode": 1
            }
          ],
          "to_node": 1,
          "to_path": 4,
          "to_subnode": 1
        }
      ]
    },
    "client_id": 38,
    "error": "",
    "status": 200,
    "success": true
  }

  state = {
    buy: false,
    sell: false,
    sell1: false,
    sell2: false,
    sell21: false,
    sell22: false,
    sell23: false,
    val: ""
  }

  buyHandler = () => {
    this.setState({ buy: true })
  }

  sellHandler = () => {
    this.setState({ sell: true })
  }

  sell1Handler = () => {
    this.setState({ sell1: true })
  }

  sell2Handler = () => {
    this.setState({ sell2: true })
  }

  sell3Handler = () => {
    console.log(this.state.val)
    if (validator.isEmail(this.state.val)) {
      this.setState({ sell21: true })
      console.log('Email')
    } else if (validator.isNumeric(this.state.val) && validator.isLength(this.state.val, { min: 10, max: 10 })) {
      this.setState({ sell22: true })
      console.log("Phone")
    }
    else {
      console.log("error")
    }
  }

  sell23Handler = () => {
    this.setState({ sell23: true })
  }

  render() {

    let display = (
      <div>
        <h1>Welcome to our Portal Please Choose a option</h1>
        <Button variant="primary" onClick={this.buyHandler}>BUY</Button>&emsp;
        <Button variant="secondary" onClick={this.sellHandler}>SEll</Button>
      </div>
    )
    if (this.state.buy) {
      display = (
        <div>
          <h1>Welcome to our Portal Please Choose a option</h1>
          <Button variant="primary" onClick={this.buyHandler}>BUY</Button>&emsp;
          <Button variant="secondary" onClick={this.sellHandler}>SEll</Button><br></br>
          <h1>Nothing on buy side Please See the Sell Side</h1>
        </div>

      )
    }
    if (this.state.sell) {
      display = (
        <div>
          <h1>Welcome to our Portal Please Choose a option</h1>
          <Button variant="primary" onClick={this.buyHandler}>BUY</Button>&emsp;
          <Button variant="secondary" onClick={this.sellHandler}>SEll</Button>
          <h1>
            {this.ob.DT_Sheet.sub[0].responses}
          </h1>
          <Form.Control type="text" placeholder="Enter your Name" />
          <br></br>
          <Button variant="primary" onClick={this.sell1Handler} >Next</Button>
        </div>

      )
    }

    if (this.state.sell1) {
      display = (
        <div>
          <div>
            <h1>Welcome to our Portal Please Choose a option</h1>
            <Button variant="primary" onClick={this.buyHandler}>BUY</Button>&emsp;
            <Button variant="secondary" onClick={this.sellHandler}>SEll</Button>

            <h1>
              {this.ob.DT_Sheet.sub[0].responses}
            </h1>
            <Form.Control type="text" placeholder="Enter your Name" />
            <br></br>
            <Button variant="primary" onClick={this.sell1Handler} >Next</Button>
          </div>
          <h1>
            {this.ob.DT_Sheet.sub[0].sub[0].responses}
          </h1>
          <Form.Control id='1' type="text" placeholder="Address" />
          <br></br>
          <Button variant="primary" onClick={this.sell2Handler} >Next</Button>
        </div>

      )
    }

    if (this.state.sell2) {
      display = (
        <div>
          <div>
            <div>
              <h1>Welcome to our Portal Please Choose a option</h1>
              <Button variant="primary" onClick={this.buyHandler}>BUY</Button>&emsp;
              <Button variant="secondary" onClick={this.sellHandler}>SEll</Button>

              <h1>
                {this.ob.DT_Sheet.sub[0].responses}
              </h1>
              <Form.Control type="text" placeholder="Enter your Name" />
              <br></br>
              <Button variant="primary" onClick={this.sell1Handler} >Next</Button>
            </div>
            <h1>
              {this.ob.DT_Sheet.sub[0].sub[0].responses}
            </h1>
            <Form.Control id='1' type="text" placeholder="Address" />
            <br></br>
            <Button variant="primary" onClick={this.sell2Handler} >Next</Button>
          </div>
          <h1>
            {this.ob.DT_Sheet.sub[0].sub[0].sub[0].responses}
          </h1>
          <Form.Control id='1' type="text" placeholder="Email or contact"
            value={this.state.val}
            onChange={e => this.setState({ val: e.target.value })} />
          <br></br>
          <Button variant="primary" onClick={this.sell3Handler} >Next</Button>
        </div>

      )
    }

    if (this.state.sell21) {
      display = (
        <div>
          <div>
            <div>
              <div>
                <h1>Welcome to our Portal Please Choose a option</h1>
                <Button variant="primary" onClick={this.buyHandler}>BUY</Button>&emsp;
                <Button variant="secondary" onClick={this.sellHandler}>SEll</Button>

                <h1>
                  {this.ob.DT_Sheet.sub[0].responses}
                </h1>
                <Form.Control type="text" placeholder="Enter your Name" />
                <br></br>
                <Button variant="primary" onClick={this.sell1Handler} >Next</Button>
              </div>
              <h1>
                {this.ob.DT_Sheet.sub[0].sub[0].responses}
              </h1>
              <Form.Control id='1' type="text" placeholder="Address" />
              <br></br>
              <Button variant="primary" onClick={this.sell2Handler} >Next</Button>
            </div>
            <h1>
              {this.ob.DT_Sheet.sub[0].sub[0].sub[0].responses}
            </h1>
            <Form.Control id='1' type="text" placeholder="Email or contact"
              value={this.state.val}
              onChange={e => this.setState({ val: e.target.value })} />
            <br></br>
            <Button variant="primary" onClick={this.sell3Handler} >Next</Button>
          </div>


          <h1>
            {this.ob.DT_Sheet.sub[0].sub[0].sub[0].sub[1].responses}
          </h1>
          <br></br>
          <h1>
            {this.ob.DT_Sheet.sub[0].sub[0].sub[0].sub[1].decision_name}
          </h1>
          <br></br>
          <Button variant="primary" onClick={this.sell23Handler} >Next</Button>
        </div>

      )
    }
    if (this.state.sell22) {
      display = (
        <div>
          <div>
            <div>
              <div>
                <h1>Welcome to our Portal Please Choose a option</h1>
                <Button variant="primary" onClick={this.buyHandler}>BUY</Button>&emsp;
                <Button variant="secondary" onClick={this.sellHandler}>SEll</Button>

                <h1>
                  {this.ob.DT_Sheet.sub[0].responses}
                </h1>
                <Form.Control type="text" placeholder="Enter your Name" />
                <br></br>
                <Button variant="primary" onClick={this.sell1Handler} >Next</Button>
              </div>
              <h1>
                {this.ob.DT_Sheet.sub[0].sub[0].responses}
              </h1>
              <Form.Control id='1' type="text" placeholder="Address" />
              <br></br>
              <Button variant="primary" onClick={this.sell2Handler} >Next</Button>
            </div>
            <h1>
              {this.ob.DT_Sheet.sub[0].sub[0].sub[0].responses}
            </h1>
            <Form.Control id='1' type="text" placeholder="Email or contact"
              value={this.state.val}
              onChange={e => this.setState({ val: e.target.value })} />
            <br></br>
            <Button variant="primary" onClick={this.sell3Handler} >Next</Button>
          </div>

          <h1>
            {this.ob.DT_Sheet.sub[0].sub[0].sub[0].sub[0].responses}
          </h1>
          <br></br>
          <h1>
            {this.ob.DT_Sheet.sub[0].sub[0].sub[0].sub[0].decision_name}
          </h1>
          <br></br>
          <Button variant="primary" onClick={this.sell23Handler} >Next</Button>
        </div>

      )
    }

    if (this.state.sell23) {
      display = (
        <div>
          <h1>
            {this.ob.DT_Sheet.sub[0].sub[0].sub[0].sub[0].sub[0].responses}
          </h1>
        </div>
      )
    }

    return (
      <div className="App">
        {display}
      </div>
    );
  }


}

export default App;
