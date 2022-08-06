import React from "react";
import { CardCategory } from "../../styles/CardCategory.styled";
import { CardDesc } from "../../styles/CardDesc.styled";
import { CardHeading } from "../../styles/CardHeading.styled";
import { CardImg } from "../../styles/CardImg.styled";
import { CardLink } from "../../styles/CardLink.styled";
import { CardTitle } from "../../styles/CardTitle.styled";
import { ItemTable } from "./ItemTable";

const ResourceDetails = ({ id, title, icon, link, description, itemArray }) => {
  return (
    <>
      <div className="details">
        <CardImg className="dImg" src={icon} />
        <CardHeading>
          <CardTitle>{title}</CardTitle>
          <CardCategory>{id}</CardCategory>
          <CardLink href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </CardLink>
        </CardHeading>
      </div>
      <CardDesc>{description}</CardDesc>
      {itemArray ? <ItemTable title={title} itemArray={itemArray} /> : null}
    </>
  );
};

export default ResourceDetails;
