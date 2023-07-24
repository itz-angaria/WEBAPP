import React from 'react'
import './Sale.css';

const TopSale = () => {
    return (
        <div className=' container content-container shadow-sm p-4'>
            <h2 className='text-center'>TOP 5 SALES</h2>
            <div className='hello'>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Sale Id:</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Sale Amount</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>S1777</td>
                            <td>PRINTER</td>
                            <td>6</td>
                            <td>250000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>S1500</td>
                            <td>DESKTOP</td>
                            <td>5</td>
                            <td>120000</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>S1212</td>
                            <td>LAPTOP</td>
                            <td>2</td>
                            <td>90000</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>S1423</td>
                            <td>MOBILE</td>
                            <td>3</td>
                            <td>85000</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>S1645</td>
                            <td>KEYBOARD</td>
                            <td>10</td>
                            <td>10000</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TopSale