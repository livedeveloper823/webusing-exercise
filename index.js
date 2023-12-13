// Filename - index.js 

import React, { createRef } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    onInputChange(e) {
        console.log(e.target.value);
    }
    state = {inputValue:''};
    render(){
        return(
            <div>
                <form>
                    Input text
                    <input type='text' onChange={this.onInputChange}/>
                </form>
                <div>
                    <label>Enter text</label>
                    <input type='text' value={this.state.inputValue}
                    onChange={(e) => {
                        this.setState({inputValue: e.target.value})
                    }}/>
                </div>
                <div>
                    <label>Entered value</label>
                    {this.state.inputValue}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));