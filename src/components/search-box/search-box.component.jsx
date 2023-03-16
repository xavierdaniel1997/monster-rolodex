
import './search-box.styles.css';


const Searchbox = ({className, placeholder, onChangeHandler}) => {

  
  return (
    <div>
        
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
  )
}

export default Searchbox;
