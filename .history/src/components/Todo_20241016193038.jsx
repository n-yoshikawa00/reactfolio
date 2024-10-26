import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";

const element = <FontAwesomeIcon icon={byPrefixAndName.fas["house"]} />;

ReactDOM.render(element, document.body);
