import styled from "styled-components";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { useState } from "react";

export default function DarkMode({ dark, setDark }) {
  const [mode, setMode] = useState('dark')
  return (
    <DarkModeButton>
      <DarkModeToggle 
      mode={mode}
      size="sm"
      inactiveTrackColor="#334155"
      inactiveTrackColorOnHover="#1e293b"
      inactiveTrackColorOnActive="#0f172a"
      activeTrackColor="#e2e8f0"
      activeTrackColorOnHover="#f8fafc"
      activeTrackColorOnActive="#cbd5e1"
      inactiveThumbColor="#e2e8f0"
      activeThumbColor="#1e293b"
      onChange={(mode) => {
        setMode(mode);
        setDark(!dark);
      }}
      />
    </DarkModeButton>
  );
}

const DarkModeButton = styled.div`
  position: absolute;
  right: 25px;
`;
