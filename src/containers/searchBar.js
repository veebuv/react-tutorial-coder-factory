import React,{Component} from 'react';

const styles = {
  submitButton: {
    height: '40px',
    flex: '1',
    borderRadius: '5%',
    border: '1px solid gray',
    backgroundColor: 'transparent',
  },

  inputField: {
    height: '40px',
    flex: '5',
    borderRadius: '5px',
    border: '1px solid gray',
    backgroundColor: 'transparent',
  },

  inputForm: {
    display: 'flex',
  },

}

class searchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : ''
        };
    }

    render(){
      const { value } = this.state;
        return (
          <div style={styles.inputForm}>
            <input
                placeholder="Get the weather of your favourite city"
                style={styles.inputField}
                value = {value}
                onChange={(e) => this._onChange(e)} />
            <button onClick={() => this._onSubmit()} style={styles.submitButton}>Submit</button>
          </div>
        )
    }
    _onChange(event){
        this.setState({
            value : event.target.value
        })
    }
    _onSubmit(event){
        const { invokeFunction } = this.props;
        invokeFunction(this.state.value);
        this.setState({
            term : ''
        })
    }
}

export default searchBar;
