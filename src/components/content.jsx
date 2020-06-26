import React from 'react'

const Content =(props) => {
    return (
        <div className="content-wrapper">
         <table id="customers">
        <tr>
            <th>Reticle</th>
            <th>Sync Status</th>
            <th>Log File</th>
        </tr>
            {
                props.tableContentList.map(( listValue, index ) => {
                    return (
                        <tr key={index}>
                        <td>{listValue.col1}</td>
                        <td style={{textAlign: "center"}}> <span class="dot" style={{backgroundColor: `${listValue.status}`}}></span></td>
                        <td>{listValue.col2}</td>
                        </tr>
                    );
                })
            }     
        {/* style={{backgroundColor: "red"}} */}
    </table>

        </div>
      )

}
export default Content