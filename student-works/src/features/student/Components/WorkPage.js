import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css";
import WorkPageV2 from "./WorkPageV2";

function WorkPage() {
  const { id } = useParams();

  return <WorkPageV2 id={id} />;
}

export default WorkPage;
