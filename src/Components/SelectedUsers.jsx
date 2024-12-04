const selectedUser = ({ currentUser, back }) => {
  return (
    <div className="card">
      <h1>{currentUser.name}</h1>
      <p>
        <strong>Email: </strong>
        {currentUser.email}
      </p>
      <p>
        <strong>Address: </strong>
        {currentUser.address.street} {currentUser.address.suite},{" "}
        {currentUser.address.city}, {currentUser.address.zipcode}
      </p>
      <p>
        <strong>Phone: </strong>
        {currentUser.phone.split(" ")[0]}
      </p>
      <p>
        <strong>Website: </strong>{" "}
        <a href={`https://${currentUser.website}`} target="_blank">
          {currentUser.website}
        </a>
      </p>
      <p>
        <strong>Company: </strong>
        {currentUser.company.name}
      </p>
      <button onClick={() => back(false)}>Back</button>
    </div>
  );
};
export default selectedUser;
