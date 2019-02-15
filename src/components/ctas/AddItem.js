import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AddItem = () => (
  <Card centered>
    <Card.Content textAlign="center">
      <Card.Header>Add new item</Card.Header>
      <Link to="/items/new">
        <Icon name="plus circle" size="massive" />
      </Link>
    </Card.Content>
  </Card>
);

export default AddItem;
