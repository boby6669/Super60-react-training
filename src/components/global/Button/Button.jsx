import './Button.css'

const Button = (props) => {
const btnText = props.btnText;
const link = props.link;

  return (
    <button style={{backgroundColor:props.bgColor?props.bgColor:"blue"}} className="btn" onClick={props.clickHandler}>
        <a href={link}>{btnText}</a>
    </button>
  )
}

export default Button;