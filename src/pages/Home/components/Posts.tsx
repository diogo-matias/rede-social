import { Avatar, Box, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";

interface cardPostsProps {
  imgUrl: string;
  title: string;
  description: string;
  key: any;
}

export default function CardPosts(props: cardPostsProps) {
  const { imgUrl, title, description, key } = props;

  return (
    <Box key={key}>
      <Paper
        sx={{
          height: "530px",
          width: "400px",
          marginTop: 2,
          overflow: "hidden",
        }}
      >
        <Box sx={{ height: "40px" }}>
          <Avatar style={{ height: 35, width: 35 }}>
            {title[0].toUpperCase() + title[1].toUpperCase()}
          </Avatar>
        </Box>
        <Paper
          sx={{
            maxWidth: "400px",
            height: "400px",
            background: `url("${imgUrl}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Paper>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: -1, padding: 2 }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <FavoriteIcon color="error" />
            <ChatIcon />
            <SendIcon />
          </Box>
          <Box marginTop={1}>
            <Typography fontWeight="bold">
              {title.length > 40 ? title.slice(0, 40) + "..." : title}
            </Typography>
            <Typography>
              {description.length > 60 ? (
                <p>
                  {" "}
                  {description.slice(0, 60) + "..."}{" "}
                  <span>
                    <a
                      href="/"
                      style={{ color: "red", textDecoration: "none" }}
                    >
                      show more
                    </a>
                  </span>
                </p>
              ) : (
                description
              )}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
