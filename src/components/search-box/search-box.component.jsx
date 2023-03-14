import {Component} from "react";
import './search-box.styles.css';

class Searchbox extends Component {
  render() {

    const {className, placeholder, onChangeHandler} = this.props;
    return (
      
      <div>
        
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}
export default Searchbox;
