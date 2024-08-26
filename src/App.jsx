import { useState } from "react";
import { Footer, Header, LocationModal } from "./components";
import { Route, Routes } from "react-router-dom";
import {
  CartPage,
  ComboPage,
  ConstructorHalf,
  HomePage,
  LoginPage,
} from "./pages";
import { createPortal } from "react-dom";

function App() {
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Toshkent");

  function openLocationModal() {
    setLocationModalOpen(true);
  }

  function closeLocationModal(location) {
    setLocationModalOpen(false);
    if (!!location) {
      setSelectedLocation(location);
    }
  }

  return (
    <>
      <Header onOpen={openLocationModal} selectedLocation={selectedLocation} />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/combo/:id" element={<ComboPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/constructor-half" element={<ConstructorHalf />} />
        </Routes>
      </main>
      <Footer />

      {locationModalOpen &&
        createPortal(
          <LocationModal
            open={locationModalOpen}
            onClose={closeLocationModal}
          />,
          document.querySelector(".wrapper")
        )}
    </>
  );
}

export default App;
