import { useUser } from "@clerk/clerk-react";
import { useState } from "react";

function SettingsPage() {
  const { user, updateUser } = useUser();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUser({
      firstName,
      lastName,
      email,
      phoneNumber,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />

      <button type="submit">Update Profile</button>
    </form>
  );
}

export default SettingsPage;