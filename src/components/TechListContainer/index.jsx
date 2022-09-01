import { TechContext } from "../../Providers/TechContext";
import { useContext, useEffect } from "react";
import List from "../TechsList";
import { ListContainer } from "./style";

const TechListContainer = () => {
  const { techs } = useContext(TechContext);

  return (
    <>
      <ListContainer>
        <div className="list-container">
          {techs.map((tech) => (
            <List tech={tech} key={tech.id} />
          ))}
        </div>
      </ListContainer>
    </>
  );
};
export default TechListContainer;
