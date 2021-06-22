import BarChart from "../../components/BarChart";
import DataTable from "../../components/dataTable";
import DonutChart from "../../components/DonutChart";
import Footer from "../../components/footer";
import NavBar from "../../components/navBar";

const Dashboard = () =>{
    return (
        <>
      <NavBar />
        <div className="container">
          <h2 className="text-primary py-3">Dashboard de Vendas</h2> 
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
export default Dashboard