import React, { useState, useEffect } from "react";

export default function useLocalStorage(val) {
  let [contacts, setContacts] = useState((val) => {
    return [contacts, setContacts];
  });

  let [contact, setContact] = useState((val) => {
    return [contacts, setContacts];
  });
}
