import { Header } from "../../shared/Header/Header";
import { Navbar } from "../../shared/Navbar/Navbar";
import { RightSideNav } from "../../shared/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";

export const News = () => {
  const { id } = useParams();

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3"></div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};
