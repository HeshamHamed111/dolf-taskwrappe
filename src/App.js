import { Box } from "@chakra-ui/react";
import "./App.css";
import Register from "./components/body/section1.js/Register";
import Intro from "./components/intro/Intro";
import TrainingCertificate from "./components/body/section2/TrainingCertificate";
import Academy from "./components/body/section3.js/Academy";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Intro />
      <Box py="120px" bg="#ebf7ff">
        <Register />
      </Box>
      <Box>
        <TrainingCertificate />
      </Box>
      <Box>
        <Academy />
      </Box>
      <Box mt="100px">
        <Footer />
      </Box>
    </div>
  );
}

export default App;
