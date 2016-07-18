import React,{Component} from 'react';
import styles from './searchBar.css';
import CSSModules from 'react-css-modules';

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
          <div className={styles.inputForm}>
            <input
                placeholder="Get the weather of your favourite city"
                className={styles.inputField}
                value = {value}
                onChange={(e) => this._onChange(e)} />
            <button onClick={() => this._onSubmit()} className={styles.submitButton}>Submit</button>
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

export default CSSModules(searchBar, styles);
