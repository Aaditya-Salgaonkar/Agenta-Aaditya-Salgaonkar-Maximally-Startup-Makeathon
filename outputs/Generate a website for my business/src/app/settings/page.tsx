import { useUser } from "@clerk/clerk-react";

function SettingsPage() {
  const { user, setUser } = useUser();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Make a POST request to update the user's profile
    const formData = new FormData(event.target);
    const updatedUser = {
      // Extract the updated user data from the form data
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      emailAddress: formData.get("emailAddress"),
      phoneNumber: formData.get("phoneNumber"),
      // ...
    };
    setUser(updatedUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        defaultValue={user.firstName}
        required
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        defaultValue={user.lastName}
        required
      />

      <label htmlFor="emailAddress">Email Address</label>
      <input
        type="email"
        name="emailAddress"
        defaultValue={user.emailAddresses[0]?.emailAddress}
        required
      />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        name="phoneNumber"
        defaultValue={user.phoneNumbers[0]?.phoneNumber}
      />

      <button type="submit">Update Profile</button>
    </form>
  );
}