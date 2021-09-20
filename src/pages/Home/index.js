import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { List } from "../../components/List";
import { setShow, selectShow } from "../../store/showSlice";
import { api } from "../../services/api";

import { Container } from "./styles";

export function Home() {
  const dispatch = useDispatch();
  const data = useSelector(selectShow);

  useEffect(() => {
    api.get("").then((res) => dispatch(setShow(res.data)));
  }, [dispatch]);

  return (
    <Container>
      <h1>{data.show.name}</h1>
      <img src={data.show.image.medium} alt={data.show.name} />
      <div dangerouslySetInnerHTML={{ __html: data.show.summary }} />
      <List />
    </Container>
  );
}
