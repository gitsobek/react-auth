import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allItemsSelector } from "../../reducers/items";
import AddItem from "../ctas/AddItem";

const Dashboard = ({ isConfirmed, items }) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}

    {items.length === 0 && <AddItem />}
  </div>
);

Dashboard.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    items: allItemsSelector(state)
  };
}

export default connect(mapStateToProps)(Dashboard);
