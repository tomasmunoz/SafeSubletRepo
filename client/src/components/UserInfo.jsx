import React from 'react';

function UserInfo() {
  return (
    <>
      <h2>My Info View</h2>
      <h3>Client-Only Route</h3>
      <table>
        <tr>
          <th>
            Name
          </th>
          <td>
            Joe Doe
          </td>
        </tr>
        <tr>
          <th>
            Email
          </th>
          <td>
            joe.doe@gmail.com
          </td>
        </tr>
      </table>
    </>
  );
}

export default UserInfo;
