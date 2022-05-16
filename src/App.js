import GlobalStyle from "./style"
import logo from "./assets/Vector.svg"
import Routes from "./Routes";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    <GlobalStyle/>
    <Routes/>
    </>
  );
}

export default App;
