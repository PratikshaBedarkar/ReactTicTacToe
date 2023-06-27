
import styles from "./Square.module.css";
const Square = (props) => {

    return <button onClick={props.onSquareClick}>{props.value}</button>
}

export default Square;