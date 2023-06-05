import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Loader from "./Loader";

const VehicleCard = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [vehicle, setVehicle] = useState({});
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(async (res) => {
        const data = await res.json();
        setVehicle(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isLoading ? (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ width: 275, height: 108 }}
    >
      <Loader />
    </Stack>
  ) : (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {vehicle.name}
        </Typography>
        <Typography color="text.secondary">Modal : {vehicle.modal}</Typography>
        <Typography color="text.secondary">
          Manufacturer : {vehicle.manufacturer}
        </Typography>
        <Typography variant="body2">
          {" "}
          Vehicle Class : {vehicle.vehicle_class}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
