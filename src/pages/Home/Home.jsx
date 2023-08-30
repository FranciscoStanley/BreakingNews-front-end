import { React, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Card } from "../../components/Card/Card";
import { HomeBody, HomeHeader } from "./HomeStyled";
import { getAllNews, getTopNews } from "../../services/newsServices";
export function Home() {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState({});

  async function findAllNews() {
    const newsResponse = await getAllNews();
    setNews(newsResponse.data.data.results);

    const topNewsResponse = await getTopNews();
    setTopNews(topNewsResponse.data.data.news);
  }

  useEffect(() => {
    findAllNews();
  }, []);

  return (
    <>
      <Navbar />
      <HomeHeader>
        {topNews.map((item) => {
          return (
            <Card
              key={item._id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes.length}
              comments={item.comments.length}
            />
          );
        })}
      </HomeHeader>
      <HomeBody>
        {news.map((item) => {
          return (
            <Card
              key={item._id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes.length}
              comments={item.comments.length}
            />
          );
        })}
      </HomeBody>
    </>
  );
}
