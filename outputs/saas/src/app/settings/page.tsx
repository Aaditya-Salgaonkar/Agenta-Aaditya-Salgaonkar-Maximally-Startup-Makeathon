import { useUser } from "@clerk/clerk-react";

function SettingsPage() {
  const { user, setUser } = useUser();

  function handleSubmit(event) {
    event.preventDefault();
    setUser(user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={user.firstName || ""}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={user.lastName || ""}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={user.emailAddresses?.[0]?.emailAddress || ""}
        onChange={(e) =>
          setUser({
            ...user,
            emailAddresses: [
              {
                emailAddress: e.target.value,
                id: user.emailAddresses?.[0]?.id,
                verified: true,
              },
            ],
          })
        }
      />
      <br />
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default SettingsPage;