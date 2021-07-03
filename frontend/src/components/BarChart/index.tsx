import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { ModuleKind } from 'typescript';
import { round } from 'utils/formarter';
import { BASE_URL } from 'utils/requests';
type SeriesData = {
    name: string;
    data: number[];
}
type ChartData = {
    labels:{
        categories: string[];
    };
    series: SeriesData[]
}
const BarChart = () =>{
    const [chartData,setChartData]= useState<ChartData>({
        labels:{
            categories: []
        },
        series:[
            {
                name: "",
                data:[]
            }
        ]
    })
    useEffect(()=>{
        axios.get(`${BASE_URL}/sales/success-by-seller`)
        .then((_response) => {
            const data = _response.data as SaleSuccess[]; 
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => round(100 * x.deals / x.visited,1))
            setChartData({
                labels:{
                    categories: myLabels
                },
                series:[
        
                    {
                        name: "%success",
                        data:mySeries
                    }
                ]
            });
        })
    },[])
    const options = {
        plotOptions:{
            bar: {
                horizontal: true
            }
        },
    };
    // const mockData = {
    //     labels:{
    //         categories: ['Anakin','Barry Allen','Kal-El','Logan','Padmé']
    //     },
    //     series:[

    //         {
    //             name: "% Sucesso",
    //             data:[43.3,67.1,70.1,80.1,90]
    //         }
    //     ]
    // }
    return(
       <Chart
            options={{...options,xaxis: chartData.labels,colors:["#7952b3"]}} //ela vai ser incorporada na definição do tsx, to dizendo aproveitar o options e vou passar mais argumentos para ele
            series={chartData.series}
            type="bar"
            height="240" 
       
       /> //retorna o componente do apexcharts que instalei, passo os dados como parametro
    );
}
export default BarChart;