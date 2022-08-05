import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { ResourceCard } from "./ResourceCard";
import { fetchResources } from "./resourceSlice";
import { Grid } from "../../styles/Grid.styled";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const ResourceView = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState("resource");
  const resources = useSelector((state) => state.resource);
  const [filteredList, setFilteredList] = useState([]);

  const handleDisplay = (event, newDisplay) => {
    if (newDisplay !== null) {
      setDisplay(newDisplay);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const result = resources.resources.filter(
      (resource) =>
        (!search ||
          resource.title.toLowerCase().includes(search.toLowerCase())) &&
        (display === "resource" || resource.tag.toLowerCase() === display)
    );
    setFilteredList(result);
  }, [search, display, resources]);

  useEffect(() => {
    dispatch(fetchResources());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="filterButtons">
        <ToggleButtonGroup value={display} exclusive onChange={handleDisplay}>
          <ToggleButton value="resource">Resources</ToggleButton>
          <ToggleButton value="request">Requests</ToggleButton>
          <ToggleButton value="user">Users</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div>
        <input
          className="search"
          type="text"
          value={search}
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div>
        {resources.loading && <div>Loading</div>}
        {!resources.loading && resources.error ? (
          <div>Error: {resources.error}</div>
        ) : null}
        {!resources.loading && resources.resources.length ? (
          <Grid>
            {filteredList.map((resource) => (
              <ResourceCard
                key={resource.id}
                id={resource.id}
                title={resource.title}
                icon={resource.icon_url}
                link={resource.link}
                description={resource.description}
                category={resource.category}
              />
            ))}
          </Grid>
        ) : null}
      </div>
    </div>
  );
};
