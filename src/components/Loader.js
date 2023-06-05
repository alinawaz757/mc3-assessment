import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

const Loader = () => {
  return (
    <Stack alignItems="center" sx={{ width: "100%" }}>
      <CircularProgress />
    </Stack>
  );
};

export default Loader;
