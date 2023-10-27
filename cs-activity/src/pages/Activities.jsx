import { Navbar, Footer } from "../components";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import { Search } from "../components";
import { allActivities } from "../components/data";

export default function Activities() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-start items-center min-h-screen gap-10 pt-28 max-container">
        <div className="flex flex-row w-full justify-center">
          <h1 className="font-bold text-4xl">Gear up for some fun!</h1>
        </div>
        <Search />
        <div className="justify-center items-start grid grid-cols-3 gap-[60px] mt-10">
          {allActivities.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              href={item.path}
              className="block shadow-md px-8 py-8 border-black border-1 hover:text-yellow-500 ">
              <Card className="w-full h-[150px]">
                <CardHeader className="flex gap-3">
                  <div className="flex flex-col">
                    <p className="text-xl font-bold ">{item.name}</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="mt-2">{item.description}</p>
                </CardBody>
                <CardBody>
                  <p className="mt-2 font-medium">{item.subdesc}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
