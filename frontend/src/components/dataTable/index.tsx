import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { formatLocalDate } from "utils/formarter";
import Pagination from "components/Pagination";

const DataTable  = () =>{
    const [activePage,setActivePage] = useState(0) /**Padrão observer */
    //sempre que o estado muda o componente renderiza, é um estado unico para todo o ciclo de vida do componente
    const [page,setPage] = useState<SalePage>({
        first:true,
        number:0,
        totalElements:0,
        totalPages:0,
        last:true

    })
    //user effect é chamado apenas na instancia do componente, ou quando activepage mudar
    useEffect(()=>{
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`)
        .then(_response =>{
            setPage(_response.data) //mudo o estado do userEfecct
        })
    },[activePage]) /*Sempre que o activePage mudar vou fazer um get, ou seja vou ficar observando */
    const changePage = (index:number) => {
        setActivePage(index)
    } 
    return (
            <>
                {/* /*Passo o estado do meu componente que é o page,para o type page do Pagination, no pagination eu posso acessar o page que foi passado*/ }
                <Pagination page={page} onPageChange={changePage}/> {/** Quando changePage vai ser chamado la no componente pagination, assin alterando o valor de activePage, ou seja, aqui será o observer*/}
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr className="table-primary">
                                <th>Data</th>
                                <th>Vendedor</th>
                                <th>Clientes visitados</th>
                                <th>Negócios fechados</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            page.content?.map(obj => (
                                <tr key={obj.id}>
                                <td>{formatLocalDate(obj.date,"dd/MM/yyyy")}</td>
                                <td>{obj.sellerDTOAK.name}</td>
                                <td>{obj.visited}</td>
                                <td>{obj.deals}</td>
                                <td>{obj.amount.toFixed(2)}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
           </>
    );
}
export default DataTable;