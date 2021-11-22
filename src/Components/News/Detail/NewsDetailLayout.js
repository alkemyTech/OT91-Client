import React, { useEffect, useState, useCallback, lazy, Suspense } from "react";
import { useParams } from "react-router";
import NewsTitle from "./NewsTittle";
import { Box } from "@mui/material";
import { getNewById } from "../../../Services/newsServices";
import LoadingSpinner from "../../../Utils/loadingSpinner";
import "../../../Styles/CardStyle.css";
import { useDispatch, useSelector } from "react-redux";
import * as newsActions from "../../../app/NewsReducer/newsReducer";

const NewsImage = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./NewsImage")), 600)
    )
);

const NewsDetailLayout = () => {
  const [newsDescription, setNewsDescription] = useState("");
  const [loading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();

  const news = useSelector((state) => state.news.currentNews);

  const stripedHtml = useCallback(() => {
    news.content && setNewsDescription(news.content.replace(/<[^>]+>/g, ""));
  }, [news.content]);

  useEffect(() => {
    dispatch(newsActions.getById(id));
    stripedHtml();
    setIsLoading(false);
  }, [id, stripedHtml]);

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <NewsTitle title={news.name} />
          <Suspense fallback={<LoadingSpinner />}>
            <NewsImage image={news.image} />
          </Suspense>
          <Box>{newsDescription}</Box>
        </div>
      )}
    </div>
  );
};

export default NewsDetailLayout;
