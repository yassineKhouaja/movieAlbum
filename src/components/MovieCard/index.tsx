import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, IconButton, Paper, Stack } from "@mui/material";
import Jauge from "../Jauge";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { convert, getImageUrl, jaugeValue } from "../../helper";
import { useAppDispatch } from "../../app/hooks";
import { deleteMovie, manageReaction, movie as movieType } from "../../features/movie/movieSlice";

type MovieCardProps = {
  movie: movieType;
};
export default function MovieCard({ movie }: MovieCardProps) {
  const dispatch = useAppDispatch();

  return (
    <Paper elevation={3}>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="300"
          image={getImageUrl(movie.url)}
          sx={{ objectFit: "fill" }}
        />
        <CardContent sx={{ p: 1 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: 0,
            }}
          >
            <p className="card_title">{movie.title}</p>
            <Chip
              label={movie.category}
              variant="outlined"
              sx={{
                fontSize: "10px",
              }}
            />
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <Jauge value={jaugeValue(movie)} />
            <Stack direction="row" spacing={1} className="action_container">
              <div className="action_container">
                <IconButton
                  aria-label="like"
                  onClick={() => dispatch(manageReaction({ id: movie.id, reaction: "like" }))}
                  color={movie?.like === 1 ? "success" : "inherit"}
                >
                  <ThumbUpIcon />
                </IconButton>
                <p>{convert(movie.likes + movie.like)} </p>
              </div>
              <div className="action_container">
                <p>{convert(movie.dislikes + movie.dislike)} </p>

                <IconButton
                  aria-label="dislike"
                  onClick={() => dispatch(manageReaction({ id: movie.id, reaction: "dislike" }))}
                  color={movie?.dislike === 1 ? "error" : "inherit"}
                >
                  <ThumbDownAltIcon />
                </IconButton>
              </div>
            </Stack>
          </Typography>
        </CardContent>

        <CardActions sx={{ p: 0 }}>
          <Button
            size="small"
            color="error"
            variant="contained"
            sx={{ ml: "auto" }}
            onClick={() => dispatch(deleteMovie(movie.id))}
            fullWidth
          >
            supprimer
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
}
