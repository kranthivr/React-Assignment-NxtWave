import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchResourceItems } from "./resourceItemSlice";
import { useSelector, useDispatch } from "react-redux";

export default function ResourceItems() {
  const id = useParams();
  const dispatch = useDispatch();

  const resourceItems = useSelector(
    (state) => state.resourceItems.resourceItems
  );

  useEffect(() => {
    dispatch(fetchResourceItems(id.id));
  }, [dispatch, id]);

  return (
    <>
      <div className="container">Hello</div>
      <div>
        {resourceItems.resource_items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </div>
    </>
  );
}
