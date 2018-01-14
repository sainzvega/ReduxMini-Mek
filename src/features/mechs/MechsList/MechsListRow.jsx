import React from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import { getWeightClass } from "../mechsSelectors";
import _ from "lodash";
import {getEntitiesSession} from "features/entities/entitySelectors";

const mapState = (state, ownProps) => {
  const session = getEntitiesSession(state);

  const { Mech } = session;

  let mech;

  if (Mech.hasId(ownProps.mechID)) {
    const mechModel = Mech.withId(ownProps.mechID);

    mech = {
      ...mechModel.ref,
      mechType: {}
    };

    if (mechModel.type) {
      mech.mechType = { ...mechModel.type.ref };
    }
  }

  return { mech };
};

const MechsListRow = ({ mech, onMechClicked=_.noop, selected }) => {
  const { id = null, type = "", mechType = {} } = mech;

  const { name = "", weight = "" } = mechType;

  const weightClass = getWeightClass(weight);

  return (
    <Table.Row onClick={() => onMechClicked(id)} active={selected}>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{type}</Table.Cell>
      <Table.Cell>{weight}</Table.Cell>
      <Table.Cell>{weightClass}</Table.Cell>
    </Table.Row>
  );
};

export default connect(mapState)(MechsListRow);
