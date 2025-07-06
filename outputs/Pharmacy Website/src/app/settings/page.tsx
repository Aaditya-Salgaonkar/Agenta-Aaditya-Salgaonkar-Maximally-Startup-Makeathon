import { useUser } from "@clerk/nextjs";

export default function Settings() {
  const { user, isSignedIn, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (!isSignedIn) return <div>Unauthorized</div>;

  return (
    <div>
      <h1>Settings</h1>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          defaultValue={user.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          defaultValue={user.lastName}
        />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" defaultValue={user.email} />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}