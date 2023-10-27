import { Link } from "react-router-dom";

export default function Button({ label }) {
  return (
    <Link to="/activities">
      <button className="bg-yellow-400 hover:bg-yellow-500 shadow-md text-white font-normal text-lg  px-8 py-3 mt-[16px]">
        {label}
      </button>
    </Link>
  );
}
