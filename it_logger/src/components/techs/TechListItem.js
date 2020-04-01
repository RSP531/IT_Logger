import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";

const TechListItem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id);
  };
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}{" "}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text"> delete</i>
        </a>
      </div>
    </li>
  );
};

TechListItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

export default connect(null, { deleteTech })(TechListItem);
