import React from 'react';
import TrailInput from './TrailInput';

const TrailEdit = (props) => {

    return (

        <TrailInput modal={props.editModal} toggle={props.toggleEditModal} modalTitle={props.trailToEdit.name} />
    );
}

export default TrailEdit;