import React, { FC } from "react";
import { css, Global } from "@emotion/react";
import { globalAlertStyles } from "./common/globalAlertStyles";
import theme from "./theme";
import NavigationRoutes from "./NavigationRoutes";

const App: FC = () => (
  <div className="App">
    <Global
      styles={css`
        ${globalAlertStyles}
        * {
          font-family: "Inter", sans-serif;
        }
        ::-webkit-scrollbar {
          width: 5px !important;
          background-color: ${theme.gray100} !important;
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${theme.gray400} !important;
        }
      `}
    />
    <NavigationRoutes />
  </div>
);

export default App;
