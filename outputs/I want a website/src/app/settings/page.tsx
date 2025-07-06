import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import axios from "axios";

export default function Settings() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [name, setName] = useState(user?.fullName || "");
  const [email, setEmail] = useState(user?.emailAddresses?.[0]?.emailAddress || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/update-user", {
      id: user.id,
      fullName: name,
      email: email,
    });
  };

  if (!isLoaded || !isSignedIn) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}