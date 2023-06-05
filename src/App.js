import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchPeople } from "./store/actions";
import PersonCard from "./components/PersonCard";
import { Stack, Container, Typography } from "@mui/material";
import Loader from "./components/Loader";
import Search from "./components/Search";

function App() {
  const people = useSelector((state) => state.people?.people);
  const loading = useSelector((state) => state?.people?.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = useCallback(
    (value) => {
      value && dispatch(fetchPeople(`/?search=${value}`));
    },
    [dispatch]
  );
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Stack alignItems="center" mt={2}>
          <Search onSubmit={handleSearch} />
          <Typography align="center" variant="h4" component="div" my={4}>
            People : {!loading && people.length}
          </Typography>
          {loading ? <Loader /> : null}
          {people.length ? (
            <Stack
              direction={{ xs: "col", sm: "row" }}
              gap={3}
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
            >
              {people.map((person, index) => {
                return <PersonCard key={index} person={person} />;
              })}
            </Stack>
          ) : null}
        </Stack>
      </Container>
    </div>
  );
}

export default App;
