import { useUser } from "@clerk/clerk-react";

function SettingsPage() {
  const { user, setUserAttributes } = useUser();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedAttributes = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
    };
    await setUserAttributes(updatedAttributes);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" name="firstName" defaultValue={user.firstName} />

      <label htmlFor="lastName">Last Name:</label>
      <input type="text" name="lastName" defaultValue={user.lastName} />

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" defaultValue={user.emailAddresses[0].emailAddress} />

      <button type="submit">Update Profile</button>
    </form>
  );
}

export default SettingsPage;