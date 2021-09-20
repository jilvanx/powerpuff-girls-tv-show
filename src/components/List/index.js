import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectEpisodieList,
  setEpisodieList,
  setEpisodie,
} from "../../store/espisodieSlice";

import { api } from "../../services/api";

import { Container, EpisodieList } from "./styles";

export function List() {
  const history = useHistory();
  const dispatch = useDispatch();
  const episodieList = useSelector(selectEpisodieList);

  const handleClick = (episodie) => {
    dispatch(setEpisodie(episodie));
    history.push("/detail");
  };

  useEffect(() => {
    api.get("/episodes").then((res) => dispatch(setEpisodieList(res.data)));
  }, [dispatch]);

  if (!Array.isArray(episodieList) && !episodieList.length) {
    return <strong>No episodes found.</strong>;
  }

  return (
    <>
      <Container>
        <h2>Episodies</h2>
        <EpisodieList>
          {episodieList.map((episodie) => (
            <li key={String(episodie.id)} onClick={() => handleClick(episodie)}>
              <strong>
                {episodie.name} - S{episodie.season}E{episodie.number}
              </strong>
              <p>Click for more details</p>
            </li>
          ))}
        </EpisodieList>
      </Container>
    </>
  );
}
