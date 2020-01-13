import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/ContactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left capitalize">
        {name} {''}
        <span
          style={{ float: 'right' }}
          className={
            type === 'personal' ? 'badge badge-primary' : 'badge badge-success'
          }
        >
          {type}
        </span>
      </h3>

      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open text-primary"></i> {email}
          </li>
        )}

        {phone && (
          <li>
            <i className="fas fa-phone text-primary "></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          onClick={() => setCurrent(contact)}
          className="btn-dark btn-sm "
        >
          Edit
        </button>
        <button onClick={onDelete} className="btn-danger btn-sm">
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
