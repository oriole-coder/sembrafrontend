import Logo from "../../assets/images/SembraCareLogo.png";
import { FiLogOut } from "react-icons/fi";
import auth from "../../services/authService";
import React from 'react';

export default function Header() {

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <header>
      <table width="100%">
        <tr>
          <td>
            <img src={Logo} alt="SembraCare Logo" width="200px" />
          </td>
          <td align="right">
            <table>
              <tr>
                <td>
                  <span>Logout: </span>
                </td>
                <td>
                  <FiLogOut onClick={handleLogout} />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table >
    </header >
  );
}
