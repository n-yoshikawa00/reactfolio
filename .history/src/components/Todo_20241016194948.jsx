import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

// const element = <FontAwesomeIcon icon={byPrefixAndName.fas["house"]} />;
const element = <FontAwesomeIcon icon={faCalendarCheck} />;

const Todo = () => {
  return <h1>{element}</h1>;
};

export default Todo;
