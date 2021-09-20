import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

import { selectShow } from "../../store/showSlice";
import { selectEpisodie } from "../../store/espisodieSlice";

import { Container } from "./styles";

export function Detail() {
  const data = useSelector(selectShow);
  const episodie = useSelector(selectEpisodie);
  const history = useHistory();

  if (data && Object.keys(data).length === 0) {
    console.log(data);
    history.push("/");
  }

  // if (episodie && Object.keys(episodie).length === 0) {
  //   return history.push("/");
  //   console.log("episodie");
  // }

  return (
    <Container>
      <h1>{data.show.name}</h1>
      <div>
        <h3>
          Title: {episodie.name} - S{episodie.season}E{episodie.number}
        </h3>
        <img src={episodie.image.medium} alt={episodie.name} />
        <div dangerouslySetInnerHTML={{ __html: episodie.summary }} />
        <button type="button">
          <IoArrowBackCircle size={50} onClick={() => history.push("/")} />
        </button>
      </div>
    </Container>
  );
}
