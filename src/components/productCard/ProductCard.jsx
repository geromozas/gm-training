import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ProductCard({
  image,
  title,
  small_description,
  unit_price,
  category,
  id,
}) {
  return (
    <Card
      className="productCard"
      sx={{
        width: {
          xs: 275,
          sm: 400,
        },
        backgroundColor: "#393E46",
        color: "black",
        marginBottom: 5,
        boxShadow: 3,
        transition: "transform 0.2s ease-in-out",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        sx={{ height: 325 }}
        image={image}
        title="imagen del producto"
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "white", fontSize: 22 }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "white", height: 0 }}
          style={{
            display: "flex",
            alignItems: "start",
            marginTop: 25,
            marginBottom: 50,
          }}
        >
          {small_description}
        </Typography>

        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ height: 5, marginTop: 5, color: "white" }}
        >
          {Number(unit_price).toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 2 }}>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" color="primary" variant="contained">
            Ver Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
