import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../styles/Card.styled";
import { CardCategory } from "../../styles/CardCategory.styled";
import { CardDesc } from "../../styles/CardDesc.styled";
import { CardDetails } from "../../styles/CardDetails.styled";
import { CardHeading } from "../../styles/CardHeading.styled";
import { CardImg } from "../../styles/CardImg.styled";
import { CardLink } from "../../styles/CardLink.styled";
import { CardTitle } from "../../styles/CardTitle.styled";

export const ResourceCard = ({
  id,
  title,
  icon,
  link,
  description,
  category,
}) => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `${id}`;
    navigate(path);
  };

  return (
    <Card onClick={routeChange}>
      <CardImg src={icon} />
      <CardHeading>
        <CardTitle>{title}</CardTitle>
        <CardCategory>{category}</CardCategory>
      </CardHeading>
      <CardDetails>
        <CardLink href={link}>{link}</CardLink>
        <CardDesc>{description}</CardDesc>
      </CardDetails>
    </Card>
  );
};
