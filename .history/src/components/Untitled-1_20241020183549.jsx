import { FaStar } from "react-icons/fa";
const Star = ({ sekected = false }) => (
  <FaStar color={selected ? "red" : "gray"} />
);
