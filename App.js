import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import useLocalStorage from "./useLocalStorage";

export default function ContactsApp() {
  const [contacts, setContacts] = useState([{}]);
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
  });

  const handleChangeFirstName = (text) => {
    setContact({ ...contact, firstName: text });
  };

  const handleChangeLastName = (text) => {
    setContact({ ...contact, lastName: text });
  };

  const handleChangeNumber = (text) => {
    setContact({ ...contact, number: text });
  };

  const handleChangeEmail = (text) => {
    setContact({ ...contact, email: text });
  };

  const submitContact = () => {
    setContacts([...contacts, contact]);
    console.log(contacts);
    setContact({ firstName: "", lastName: "", number: "", email: "" });
  };

  function containsNumber(str) {
    return /\d/.test(str);
  }
  return (
    <View style={{ padding: 60, paddingTop: 120 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Our Contacts App
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          height: 30,
          marginBottom: 20,
          paddingLeft: 5,
        }}
        placeholder="firstName"
        onChangeText={(text) => handleChangeFirstName(text)}
        value={contact.firstName}
      />

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          height: 30,
          marginBottom: 20,
          paddingLeft: 5,
        }}
        placeholder="firstName"
        onChangeText={(text) => handleChangeLastName(text)}
        value={contact.lastName}
      />

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          height: 30,
          marginBottom: 20,
          paddingLeft: 5,
        }}
        placeholder="Number"
        onChangeText={(text) => handleChangeNumber(text)}
        value={contact.number}
      />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          height: 30,
          marginBottom: 20,
          paddingLeft: 5,
        }}
        placeholder="Email"
        onChangeText={(text) => handleChangeEmail(text)}
        value={contact.email}
      />
      <View style={{ backgroundColor: "black" }}>
        <Button title="Add Contact" onPress={() => submitContact()} />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 20,
          marginTop: 50,
        }}
      >
        My Contacts
      </Text>
      {contacts.map((contact) => {
        if (
          contact.firstName == "" ||
          contact.lastName == "" ||
          contact.email == "" ||
          contact.number == "" ||
          contact.number == undefined ||
          !containsNumber(contact.number) ||
          !contact.email.includes("@")
        ) {
          return;
        }
        return (
          <View
            style={{
              borderWidth: 1,
              borderColor: "black",
              height: 25,
              paddingLeft: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>{contact.firstName}</Text>
            <Text>{contact.lastName}</Text>
            <Text>{contact.number}</Text>
            <Text>{contact.email}</Text>
          </View>
        );
      })}
    </View>
  );
}
