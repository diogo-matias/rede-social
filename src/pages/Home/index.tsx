import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/modules/rootReducer";
import {
  fetchPosts,
  postsSelector,
  selectAll as selectAllPosts,
} from "../../store/modules/posts/postsSlice";
import { createClient } from "pexels";
import CardPosts from "./components/Posts";

import {
  fetchImages,
  selectAll as selectAllImages,
} from "../../store/modules/images/imagesSlice";
import Wrapper from "../../shared-components/Wrapper";

export default function Home() {
  const dispatch = useDispatch<any>();
  const images = useSelector(selectAllImages);
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(fetchPosts("/posts"));
    dispatch(fetchImages("curated"));
    console.log(posts);
  }, []);

  return (
    <>
      <Wrapper>
        <Box marginTop={3} sx={{ display: "flex,", justifyContent: "center" }}>
          <Typography variant="h3">
            <span style={{ fontWeight: "bold" }}>Insta</span>ban
          </Typography>
        </Box>
        {images.map((image, index) => {
          return (
            <CardPosts
              key={index}
              imgUrl={image.src.original}
              title={posts[index]?.title}
              description={posts[index]?.body}
            />
          );
        })}
      </Wrapper>
    </>
  );
}
