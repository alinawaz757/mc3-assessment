import { useCallback, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { formatDate } from "../utils/helperFunctions";
import VehiclesInfoPopup from "./VehiclesInfoPopup";

export default function PersonCard({ person }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback(
    (event) => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl]
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Card sx={{ minWidth: 275, maxWidth: 500 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {person.name}
        </Typography>
        <Typography color="text.secondary">Height : {person.height}</Typography>
        <Typography color="text.secondary">Mass : {person.mass}</Typography>
        <Typography variant="body2"> Gender : {person.gender}</Typography>
        <Typography variant="body2">
          Edited : {formatDate(person.edited)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          aria-describedby={id}
          size="small"
          variant="contained"
          fullWidth
          onClick={handleClick}
        >
          Show Vehicles
        </Button>
        <VehiclesInfoPopup
          id={id}
          anchorEl={anchorEl}
          person={person}
          handleClose={handleClose}
          open={open}
        />
      </CardActions>
    </Card>
  );
}
