import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { State } from "../../store/modules/rootReducer";
import { fetchPosts } from "../../store/modules/posts/postsSlice";
import { createClient } from "pexels";
import axios from "axios";
import { fetchImages, selectAll } from "../../store/modules/images/imagesSlice";

export default function Home() {

    const dispatch = useDispatch<any>()
    const posts = useSelector((state: State) => state.posts)
    

    useEffect(() => {
        dispatch(fetchPosts('/posts'))
        dispatch(fetchImages('curated'))
    }, [])

    return (
        <>
            <Box marginTop={3}>

                <Typography variant='h3'><span style={{fontWeight: 'bold'}}>Insta</span>ban</Typography>
            </Box>
        </>
    )
}