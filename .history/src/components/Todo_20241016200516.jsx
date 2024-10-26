import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

// const element = <FontAwesomeIcon icon={byPrefixAndName.fas["house"]} />;
const element = <FontAwesomeIcon icon={faCalendarCheck} />;

const Todo = () => {
  return <a href="#">{element}</a>;
};

export default Todo;
