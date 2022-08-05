import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchResourceItems } from "./resourceItemSlice";
import { useSelector, useDispatch } from "react-redux";
import { Breadcrumbs, Link } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ResourceDetails from "./ResourceDetails";

export default function ResourceItems() {
  const dispatch = useDispatch();
  const id = useParams();

  const resourceItems = useSelector((state) => state.resourceItems);
  const resourceDetails = resourceItems.resourceItems;

  useEffect(() => {
    dispatch(fetchResourceItems(id.id));
  }, [dispatch, id.id]);

  return (
    <div className="container">
      {resourceItems.loading && <div>Loading</div>}
      {!resourceItems.loading && resourceItems.error ? (
        <div>Invalid URL: {resourceItems.error}</div>
      ) : null}
      {!resourceItems.loading && !resourceItems.error ? (
        <>
          <Breadcrumbs>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <ArrowBackIosIcon fontSize="small" />
              Resources
            </Link>
          </Breadcrumbs>
          <ResourceDetails
            key={resourceDetails.id}
            id={resourceDetails.id}
            title={resourceDetails.title}
            icon={resourceDetails.icon_url}
            link={resourceDetails.link}
            description={resourceDetails.description}
            itemArray={resourceDetails.resource_items}
          />
        </>
      ) : null}
    </div>
  );
}
