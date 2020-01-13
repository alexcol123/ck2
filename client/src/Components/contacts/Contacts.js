import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";
import Spinner from "../layout/Spinner";

const Contacts = props => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  console.log(filtered);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return (
      <h4 className="text-primary my-2" style={{ textAlign: "center" }}>
        There are no contacts to show...
      </h4>
    );
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered != null
            ? filtered.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
