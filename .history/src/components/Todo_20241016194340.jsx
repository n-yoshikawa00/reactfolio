import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

// const element = <FontAwesomeIcon icon={byPrefixAndName.fas["house"]} />;
const element = <FontAwesomeIcon icon={faCalendarCheck} />;

return element;
ReactDOM.render(element, document.body);

export default Todo;
