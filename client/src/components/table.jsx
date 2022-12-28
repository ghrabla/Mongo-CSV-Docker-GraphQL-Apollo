const Table = ()=>{
    return(
        <div class="container">
        <h2 class="text-center pb-2 mb-2">Departures</h2>
        <div class="table-responsive">
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>Flight No.</th>
                        <th>Destination</th>
                        <th>Time</th>
                        <th>Gate</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Flight No.">SLC 4000</td>
                        <td data-label="Destination">Alaska</td>
                        <td data-label="Time">10:10</td>
                        <td data-label="Gate">14</td>
                        <td data-label="Status">On Time</td>
                    </tr>
                    <tr>
                        <td data-label="Flight No.">JJ 123</td>
                        <td data-label="Destination">Dubai</td>
                        <td data-label="Time">09:30</td>
                        <td data-label="Gate">22</td>
                        <td data-label="Status">Boarding</td>
                    </tr>
                    <tr>
                        <td data-label="Flight No.">PPV 883</td>
                        <td data-label="Destination">Chile</td>
                        <td data-label="Time">15:50</td>
                        <td data-label="Gate">10</td>
                        <td data-label="Status" class="cancelled">Cancelled</td>
                    </tr>
                    <tr>
                        <td data-label="Flight No.">NQN 4833</td>
                        <td data-label="Destination">Cologne</td>
                        <td data-label="Time">17:00</td>
                        <td data-label="Gate">5</td>
                        <td data-label="Status">On Time</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Table;