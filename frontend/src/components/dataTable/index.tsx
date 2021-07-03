import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { formatLocalDate } from "utils/formarter";

const DataTable  = () =>{
    const [page,setPage] = useState<SalePage>({
        first:true,
        number:0,
        totalElements:0,
        totalPages:0,
        last:true

    }) 
    useEffect(()=>{
        axios.get(`${BASE_URL}/sales?page=4&size=20&sort=date,desc`)
        .then(_response =>{
            setPage(_response.data)
        })
    },[])
    return (
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
    );
}
export default DataTable;