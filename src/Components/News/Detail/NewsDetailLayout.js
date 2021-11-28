import React, { useEffect, useState, useCallback, lazy, Suspense } from "react";
import { useParams } from "react-router";
import NewsTitle from "./NewsTittle";
import { Box } from "@mui/material";
import { getNewById } from "../../../Services/newsServices";
import LoadingSpinner from "../../../Utils/loadingSpinner";
import "../../../Styles/CardStyle.css";
import { useDispatch, useSelector } from "react-redux";
import * as newsActions from "../../../app/NewsReducer/newsReducer";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

const Title = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../../Title/Title")), 600)
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
          <Card className="cardStyle">
            <CardActionArea>
              <CardMedia>
                <Suspense fallback={<LoadingSpinner />}>
                  <Title title={news.name} image={news.image} key={news.id} />
                </Suspense>
              </CardMedia>
              <CardContent>
                <Typography>{newsDescription}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      )}
    </div>
  );
};

export default NewsDetailLayout;
