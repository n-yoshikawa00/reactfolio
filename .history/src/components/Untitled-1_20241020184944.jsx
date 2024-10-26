import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Star = ({ selected = false }) => (
  <FaStar color={selected ? "red" : "gray"} />
);

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars] = useState(3);
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={selectedStars > i} />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
