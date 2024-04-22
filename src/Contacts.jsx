import { Link } from 'react-router-dom'

function Contacts() {
    return (
        <div className="h-100">
            <Link className="d-flex"
            style={{color: '#da7eae'}} to='/'>{'Home'}</Link>
            <Link className="d-flex"
            style={{color: '#da7eae'}} to='/about'>{'About'}</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope='#'
                        style={{background: 'lightblue'}}>#</th>
                        <th scope='col' style={{background: 'lightblue'}}>First Name</th>
                        <th scope='col' style={{background: 'lightblue'}}>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row1' style={{background: 'pink'}}>1</th>
                        <td>Nathan</td>
                        <td>Wilson</td>
                    </tr>
                    <tr>
                        <th scope='row1' style={{background: 'pink'}}>2</th>
                        <td>Duke</td>
                        <td>McClellan</td>
                    </tr>
                    <tr>
                        <th scope='row1' style={{background: 'pink'}}>3</th>
                        <td>Cody</td>
                        <td>Miller</td>
                    </tr>
                    <tr>
                        <th scope='row1' style={{background: 'pink'}}>3</th>
                        <td>Caitlin</td>
                        <td>Schaeffer</td>
                    </tr>
                    <tr>
                        <th scope='row1' style={{background: 'pink'}}>4</th>
                        <td>Eoin</td>
                        <td>McDonnell</td>
                    </tr>
                    <tr>
                        <th scope='row1' style={{background: 'pink'}}>5</th>
                        <td>Henry</td>
                        <td>Knollenberg</td>
                    </tr>
                    <tr>
                        <th scope='row1' style={{background: 'pink'}}>6</th>
                        <td>Jacinta</td>
                        <td>Unknown</td>
                    </tr>
                    <tr>
                        <th scope='row1' style={{background: 'pink'}}>7</th>
                        <td>Jay</td>
                        <td>Miller</td>
                    </tr>
                    <tr>
                        <th scope='row1' style={{background: 'pink'}}>8</th>
                        <td>Nathan</td>
                        <td>Wilson</td>
                    </tr>
                    <tr>
                        <th scope='row1' style={{background: 'pink'}}>9</th>
                        <td>Maddie</td>
                        <td>Carlson</td>
                    </tr>
                    <tr>
                        <th scope='row1' style={{background: 'pink'}}>10</th>
                        <td>Nathan</td>
                        <td>Wilson</td>
                    </tr>
                    <tr>
                        <th scope='row1' style={{background: 'pink'}}>11</th>
                        <td>Owen</td>
                        <td>Coombs</td>
                    </tr>
                    <tr>
                        <th scope='row1' style={{background: 'pink'}}>12</th>
                        <td>Ryan</td>
                        <td>Anderson</td>
                    </tr>
                    <tr>
                        <th scope='row1' style={{background: 'pink'}}>13</th>
                        <td>Neal</td>
                        <td>Sharma</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}










export default Contacts 