import { Navbar, Footer } from "../components";
import { useParams } from "react-router-dom";
import { labtopActivitiesDetail } from "../components/data";

export default function LaptopDetails() {
  const { id } = useParams();
  const laptop = labtopActivitiesDetail.find(
    (item) => item.path === `/laptop${id}`
  );

  if (!laptop) {
    return <div>Laptop not found</div>;
  }

  return (
    <div>
      <h1>{laptop.name}</h1>
      <p>{laptop.description}</p>
      {/* Add other info here as required */}
    </div>
  );
}
