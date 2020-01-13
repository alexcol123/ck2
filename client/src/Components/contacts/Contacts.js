import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';

const Contacts = props => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  console.log(filtered);

  if (contacts.length === 0) {
    return (
      <h4 className="text-primary my-2" style={{ textAlign: 'center' }}>
        There are no contacts to show...
      </h4>
    );
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered != null
          ? filtered.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
