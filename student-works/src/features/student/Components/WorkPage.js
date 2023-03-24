import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../App.css';
import { selectStudentById } from '../studentSlice';

function WorkPage () {
    const {id} = useParams();
    const work = useSelector((state) => selectStudentById(state, id));
    const navigate = useNavigate();

    return(
        <ul data-testid="list">
            <li>id: {work.id}</li>
            <li>First name: {work.FirstName}</li>
            <li>Last name: {work.LastName}</li>
            <li>group: {work.group}</li>
            <li>topic: {work.topic}</li>
            <li>answer:</li>
            <p>{work.answer}</p>
            <Button onClick={() =>navigate(-1)}>Return</Button>
        </ul>
    );
}

export default WorkPage;