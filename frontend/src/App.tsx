import React from 'react';
import NavBar from './components/navBar';
import DataTable from './components/dataTable'
import Footer from './components/footer';
import BarChart from './components/BarChart';
import DonutChart from './components/DonutChart';
function App() {
  return (
    <>
      <NavBar />
        <div className="container">
          {/* py-3 espacamento na vertical */}
          <h2 className="text-primary py-3">Dashboard de Vendas</h2> 
            {/* px-3 espacamento na horziontal */}
          <div className="row px-3">
              <div className="col-xs-12 col-sm-12 col-md-6 text-center">
                <h5 className="text-secondary">Taxa de sucesso (%)</h5>
                <BarChart/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 text-center">
                <h5 className="text-secondary">Todas as vendas (%)</h5>
                  <DonutChart/>
              </div>
          </div>
          <div className="py-3 row"> 
              <h3 className="text-primary">Todas as vendas</h3>
          </div>
          <div className="row ">
             <DataTable/>
          </div>
        </div>
      <Footer/>
    </>
  );
}

export default App;
