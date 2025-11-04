import React, { createContext, useContext, useMemo, useState } from "react";
import { Theme, lightTheme } from "./index";

const ThemeContext = createContext({
  theme: lightTheme,
  setTheme: (_: Theme) => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{initial?: Theme; children: React.ReactNode}> = ({ initial = lightTheme, children }) => {
  const [theme, setTheme] = useState<Theme>(initial);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
