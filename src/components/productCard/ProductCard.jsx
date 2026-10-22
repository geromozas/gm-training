import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function ProductCard({
  image,
  title,
  small_description,
  unit_price,
  category,
  frecuenciaPago,
  id,
}) {
  return (
    <Card
      sx={{
        width: { xs: 280, sm: 380 },
        backgroundColor: "#121212",
        color: "#fff",
        borderRadius: "18px",
        border: "1px solid #1f1f1f",
        marginBottom: 6,
        boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.8)",
          border: "1px solid #9BE564",
        },
      }}
    >
      <CardMedia
        component="img"
        height="280"
        image={image}
        alt={title}
        sx={{
          objectFit: "cover",
          filter: "brightness(0.9)",
        }}
      />

      {/* <CardContent sx={{ padding: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            marginBottom: 0,
            minHeight: "64px",
          }}
        >
          {title}
        </Typography>

      
        {category && (
          <Chip
            label={category}
            size="small"
            sx={{
              backgroundColor: "rgba(155, 229, 100, 0.15)",
              color: "#9BE564",
              border: "1px solid #9BE564",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: 0.5,
              marginBottom: 1.5,
            }}
          />
        )}
        <Typography
          variant="h6"
          sx={{
            color: "#9BE564",
            fontWeight: 700,
            fontSize: 20,
          }}
        >
          {Number(unit_price).toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            color: "#9BE564",
            letterSpacing: 1,
            marginBottom: 1,
          }}
        >
          {frecuenciaPago}
        </Typography>
      </CardContent> */}

      <CardContent sx={{ padding: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            marginBottom: 0,
            minHeight: "64px",
          }}
        >
          {title}
        </Typography>

        {category && (
          <Chip
            label={category}
            size="small"
            sx={{
              backgroundColor: "rgba(155, 229, 100, 0.15)",
              color: "#9BE564",
              border: "1px solid #9BE564",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: 0.5,
              marginBottom: 1.5,
            }}
          />
        )}

        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#9BE564",
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            {Number(unit_price).toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </Typography>

          {frecuenciaPago && (
            <Typography sx={{ fontSize: 14, color: "#9BE564" }}>
              {frecuenciaPago}
            </Typography>
          )}
        </Box>
      </CardContent>

      <CardActions sx={{ padding: 3, paddingTop: 0 }}>
        <Link to={`/itemDetail/${id}`} style={{ width: "100%" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#9BE564",
              color: "#0B0B0B",
              fontWeight: "bold",
              borderRadius: "12px",
              "&:hover": {
                backgroundColor: "#84d94a",
              },
            }}
          >
            Ver Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
