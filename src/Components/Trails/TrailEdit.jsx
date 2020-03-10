import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TrailEdit = (props) => {

    const toggleModal = () => setModal(!modal)

    return (
        <div>
            <Modal>
                <ModalHeader toggle={toggleModal}>update your trail log here!</ModalHeader>
                <Form>
                    <ModalBody>

                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </Form>
            </Modal>
        </div>
    );
};

export default TrailEdit;