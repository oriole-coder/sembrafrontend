import React, { useState } from "react";
import { Outlet } from "react-router";
import Header from "./header";
import { Navbar } from "./navBar";
import { Table, Tbody, Tr, Td } from '@chakra-ui/react'

export default function RouteLayout() {
  return (
    <div className="route-layout">
      <Header />
      <main>
        <table>
            <tr>
              <td><Navbar /></td>
              <td><Outlet /></td>
            </tr>
        </table>
      </main>
    </div>
  );
}
