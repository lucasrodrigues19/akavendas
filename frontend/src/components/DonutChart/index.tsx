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
    //chartData variavel que vai ser o dado, setChartData: função para alterar o dado, ChartData: tipo generico do chartData, entre () o valor inicial
    const [chartData, setChartData] = useState<ChartData>({labels:[],series:[]})
    //FORMA ERRADA, certo com o hocks, executando dessa forma, toda vez que o useState atualizar o estado, o componente vai verificar se tem algo para renderizar
    // axios.get(`${BASE_URL}/sales/amount-by-seller`)
    //     .then((_response) => {
    //         const data = _response.data as SaleSum[]; //data vai ser do tipo SaleSum( o tipo que é retornado da requisição e foi criado em sale.ts)
    //         const myLabels = data.map(x => x.sellerName);
    //         const mySeries = data.map(x => x.sum)
    //         setChartData({labels:myLabels, series: mySeries});
    //         console.log(chartData)
    //         console.log(_response.data)
    //     })
     //FORMA CORRETA, 1- primeiro parametro: a funçao que vai executar, 2 argumento: lista de objeto que o useEffect vai observar. com o useRequest, está ação so vai ser executada na
    //instanciação do componente
     // const mockData = {
    //     series:[477138,799928,444867,220426,473088],
    //     labels: ['Anakin','Barry Alen', 'Karl-el','Logan','Padmé']
    // }
    useEffect(()=>{
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then((_response) => {
            const data = _response.data as SaleSum[]; //data vai ser do tipo SaleSum( o tipo que é retornado da requisição e foi criado em sale.ts)
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
       
       /> //retorna o componente do apexcharts que instalei, passo os dados como parametro
    );
}
export default DonutChart;