import { useState, useEffect } from "react";
import SelectedUsers from "./SelectedUsers";
const Users = () => {
  const [userData, setUserData] = useState([]);
  const [singleData, setSingleData] = useState(false);
  const [selected, setSelected] = useState({});
  const onClickHandler = (currentUser) => {
    setSelected(currentUser);
    setSingleData(!singleData);
  };
  const backToHomeHandler = (val) => {
    setSingleData(val);
  };
  useEffect(() => {
    async function data() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setUserData(result);
      } catch (error) {
        console.log(error);
      }
    }
    data();
  }, []);
  return (
    <>
      {!singleData ? (
        <>
          <h1>Contact List</h1>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
              {userData.map((user) => {
                return (
                  <tr key={user.id}>
                    <td onClick={() => onClickHandler(user)}>{user.name}</td>
                    <td onClick={() => onClickHandler(user)}>{user.email}</td>
                    <td onClick={() => onClickHandler(user)}>
                      {user.phone.split(" ")[0]}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <SelectedUsers currentUser={selected} back={backToHomeHandler} />
      )}
    </>
  );
};

export default Users;
