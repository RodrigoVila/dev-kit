import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type ThemeType = "light" | "dark";

type ThemeProviderProps = {
  children: ReactNode;
};

type ContextType = {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
};

const initialData: ContextType = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext = createContext<ContextType>(initialData);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(initialData.theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
