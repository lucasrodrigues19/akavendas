import Chart from 'react-apexcharts';
import { ModuleKind } from 'typescript';
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import { BASE_URL } from 'utils/requests';
import { SaleSum } from 'types/sale';

type ChartData = {
    labels:string[];
    series:number[];
}

const DonutChart = () =>{
    const [chartData, setChartData] = useState<ChartData>({labels:[],series:[]})
    useEffect(()=>{
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then((_response) => {
            const data = _response.data as SaleSum[]; 
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum)
            setChartData({labels:myLabels, series: mySeries});
        })
    },[])
    const options = {
        legend:{
            show:true
        }
    };
    return(
       <Chart
            options={{...options,labels: chartData.labels,colors:["#A03EAF","#78058A","#6B3473","#886B8D","#4E015A"]}} //ela vai ser incorporada na definição do tsx, to dizendo aproveitar o options e vou passar mais argumentos para ele
            series={chartData.series}
            type="donut"
            height="240" 
       
       /> 
    );
}
export default DonutChart;