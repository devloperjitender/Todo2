 export default function TodoRowItem(props){
    return(
        <tr onClick={()=>props.deleteTodo(props.rowNumber)}>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssign}</td>
        </tr>
    );
 }