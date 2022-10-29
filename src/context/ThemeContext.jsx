import React from "react";

const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("xurxomf.me-theme");
        if (typeof storedPrefs === "string") {
            return storedPrefs;
        }
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
    }
    return "light";
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = React.useState(getInitialTheme);

    const checkTheme = (existing) => {
        const root = window.document.documentElement;

        root.classList.remove(existing === "dark" ? "light" : "dark");
        root.classList.add(existing);

        localStorage.setItem("xurxomf.me-theme", existing);
    };

    if (initialTheme) {
        checkTheme(initialTheme);
    }

    /*
    React.useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
            checkTheme(e.matches ? "dark" : "light");
            window.location.reload();
        });
    }, []);
    */

    React.useEffect(() => {
        checkTheme(theme);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
