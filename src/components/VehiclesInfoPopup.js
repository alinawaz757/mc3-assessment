import Popover from "@mui/material/Popover";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import VehicleCard from "./VehicleCard";

const VehiclesInfoPopup = ({ id, open, anchorEl, handleClose, person }) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      {!!person?.vehicles?.length ? (
        <Stack
          direction={{ xs: "col", md: "row" }}
          gap={2}
          p={2}
          sx={{ minWidth: 200, minHeight: 100 }}
        >
          {person?.vehicles?.map((vehicle, i) => (
            <VehicleCard key={vehicle} url={vehicle} />
          ))}
        </Stack>
      ) : (
        <Stack sx={{ minWidth: 300, minHeight: 100 }}>
          <Typography align="center" fontWeight="bold" variant="h5" my={4}>
            No vehicles found!
          </Typography>
        </Stack>
      )}
    </Popover>
  );
};

export default VehiclesInfoPopup;
