import Chart from 'react-apexcharts';
import { ModuleKind } from 'typescript';
const BarChart = () =>{
    const options = {
        plotOptions:{
            bar: {
                horizontal: true
            }
        },
    };
    const mockData = {
        labels:{
            categories: ['Anakin','Barry Allen','Kal-El','Logan','Padmé']
        },
        series:[

            {
                name: "% Sucesso",
                data:[43.3,67.1,70.1,80.1,90]
            }
        ]
    }
    return(
       <Chart
            options={{...options,xaxis: mockData.labels,colors:["#7952b3"]}} //ela vai ser incorporada na definição do tsx, to dizendo aproveitar o options e vou passar mais argumentos para ele
            series={mockData.series}
            type="bar"
            height="240" 
       
       /> //retorna o componente do apexcharts que instalei, passo os dados como parametro
    );
}
export default BarChart;