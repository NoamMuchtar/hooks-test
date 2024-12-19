import { useContext } from "react";
import { SiteTheme } from "../App";

function B() {
  const theme = useContext(SiteTheme);
  return (
    <>
      <button style={{ color: theme.color, backgroundColor: theme.background }}>
        B Button
      </button>
    </>
  );
}

export default B;
