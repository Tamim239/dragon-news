import { useEffect, useState } from "react";
import { Header } from "../../shared/Header/Header";
import { Navbar } from "../../shared/Navbar/Navbar";
import { RightSideNav } from "../../shared/RightSideNav/RightSideNav";
import { useParams, useLoaderData, Link } from "react-router-dom";

export const News = () => {
  const [newCard, setNewCard] = useState({});

  const { id } = useParams();
  const newsData = useLoaderData();
  // console.log(newsData);
  useEffect(() => {
    const remaining = newsData.find((data) => data._id === id);
    if (remaining) {
      setNewCard(remaining);
    }
  }, [id, newsData]);
  console.log(newCard.details);
  const {image_url, thumbnail_url, title, author, details} = newCard

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mb-10 p-5">
            <img
              src={image_url}
              alt=""
              className="object-cover object-center w-full h-72 dark:bg-gray-500 rounded-xl"
            />
            <p className="text-xl font-bold my-2">{title}</p>
            <p>{details}</p>
          <Link to="/"><button className="btn btn-secondary my-5">All news in this category</button></Link>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};
