import Chart from 'react-apexcharts';
import { ModuleKind } from 'typescript';
const DonutChart = () =>{
    const options = {
        legend:{
            show:true
        }
    };
    const mockData = {
        series:[477138,799928,444867,220426,473088],
        labels: ['Anakin','Barry Alen', 'Karl-el','Logan','Padmé']
    }
    return(
       <Chart
            options={{...options,labels: mockData.labels,colors:["#A03EAF","#78058A","#6B3473","#886B8D","#4E015A"]}} //ela vai ser incorporada na definição do tsx, to dizendo aproveitar o options e vou passar mais argumentos para ele
            series={mockData.series}
            type="donut"
            height="240" 
       
       /> //retorna o componente do apexcharts que instalei, passo os dados como parametro
    );
}
export default DonutChart;