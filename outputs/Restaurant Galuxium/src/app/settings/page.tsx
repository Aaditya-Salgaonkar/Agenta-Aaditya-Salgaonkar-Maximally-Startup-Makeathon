import { useUser } from "@clerk/clerk-react";

function SettingsPage() {
  const { user, setPreferredLanguage, setFirstName, setLastName } = useUser();

  const handleLanguageChange = (event) => {
    setPreferredLanguage(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Settings</h1>
      <form>
        <label htmlFor="language">Preferred Language:</label>
        <select id="language" value={user.preferred_language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
        <br />
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={user.first_name}
          onChange={handleFirstNameChange}
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={user.last_name}
          onChange={handleLastNameChange}
        />
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default SettingsPage;