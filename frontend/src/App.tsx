import React from 'react';
import NavBar from './components/navBar';
import DataTable from './components/dataTable'
import Footer from './components/footer';
function App() {
  return (
    <>
      <NavBar />
        <div className="container">
          <DataTable/>
        </div>
      <Footer/>
    </>
  );
}

export default App;
