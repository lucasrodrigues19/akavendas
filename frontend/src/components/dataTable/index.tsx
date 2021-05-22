const DataTable  = () =>{
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
                        <tr>
                            <td>22/04/2021</td>
                            <td>Barry Allen</td>
                            <td>34</td>
                            <td>25</td>
                            <td>15017.00</td>
                        </tr>
                        <tr>
                            <td>22/05/2021</td>
                            <td>Luis Allen</td>
                            <td>30</td>
                            <td>29</td>
                            <td>16017.00</td>
                        </tr>
                        <tr>
                            <td>21/04/2021</td>
                            <td>Chery Allen</td>
                            <td>30</td>
                            <td>223</td>
                            <td>17017.00</td>
                        </tr>
                        <tr>
                            <td>28/04/2021</td>
                            <td>Clark Allen</td>
                            <td>39</td>
                            <td>70</td>
                            <td>9210.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    );
}
export default DataTable;