import React from 'react'
const Content =() => {
    return (
        <div className="content-wrapper">
         <table id="customers">
        <tr>
            <th>Reticle</th>
            <th>Sync Status</th>
            <th>Log File</th>
        </tr>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td style={{textAlign: "center"}}> <span class="dot"></span></td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Berglunds snabbköp</td>
            <td style={{textAlign: "center"}}><span class="dot"/></td>
            <td>Sweden</td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td style={{textAlign: "center"}}><span class="dot"/></td>
            <td>Mexico</td>
        </tr>
        <tr>
            <td>Ernst Handel</td>
            <td style={{textAlign: "center"}}><span class="dot" style={{backgroundColor: "red"}}/></td>
            <td>Austria</td>
        </tr>
        <tr>
            <td>Island Trading</td>
            <td style={{textAlign: "center"}}><span class="dot"/></td>
            <td>UK</td>
        </tr>
        <tr>
            <td>Königlich Essen</td>
            <td style={{textAlign: "center"}}><span class="dot"/></td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td style={{textAlign: "center"}}><span class="dot"/></td>
            <td>Canada</td>
        </tr>
        <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td style={{textAlign: "center"}}><span class="dot"/></td>
            <td>Italy</td>
        </tr>
        <tr>
            <td>North/South</td>
            <td style={{textAlign: "center"}}><span class="dot"/></td>
            <td>UK</td>
        </tr>
        <tr>
            <td>Paris spécialités</td>
            <td style={{textAlign: "center"}}><span class="dot"/></td>
            <td>France</td>
        </tr>
</table>

        </div>
      )

}
export default Content