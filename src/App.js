import GlobalStyle from "./style";
import logo from "./assets/Vector.svg";
import Routes from "./Routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#4FD971",
			light: "#B2FF9E",
		},
		secondary: {
			main: "#FE8537",
		},
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Routes />
			</ThemeProvider>
		</>
	);
}

export default App;
