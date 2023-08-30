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
        <Card
          top={true}
          title={topNews.title}
          text={topNews.text}
          banner={topNews.banner}
          likes={topNews.likes}
          comments={topNews.comments}
        />
      </HomeHeader>
      <HomeBody>
        {news.map((item) => {
          return (
            <Card
              key={item._id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
            />
          );
        })}
      </HomeBody>
    </>
  );
}
