import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css";
import { selectStudentById } from "../studentSlice";
import WorkPageV2 from "./WorkPageV2";

function WorkPage() {
  const { id } = useParams();
  //const work = useSelector((state) => selectStudentById(state, id));
  // const navigate = useNavigate();*/

  return <WorkPageV2 id={id} />;
}

export default WorkPage;
