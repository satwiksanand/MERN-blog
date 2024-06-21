import { useParams } from "react-router-dom";
import DashSidebar from "../component/DashSidebar";
import DashProfile from "../component/DashProfile";

function Dashboard() {
  const { tab } = useParams();

  return (
    <div className="min-h-screen flex flex-col md:flex-row px-0 m-0">
      <div className="">
        {/* sidebar over here */}
        <DashSidebar />
      </div>
      {tab === "profile" ? <DashProfile /> : null}
    </div>
  );
}

export default Dashboard;
