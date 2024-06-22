import { Sidebar } from "flowbite-react";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

function DashSidebar() {
  const { tab } = useParams();
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            as={Link}
            to={"/dashboard/profile"}
            icon={FaUserAlt}
            label={"user"}
            labelColor={"dark"}
            className="cursor-pointer"
            active={tab === "profile"}
          >
            Profile
          </Sidebar.Item>
          <Sidebar.Item icon={FaSignOutAlt} className="cursor-pointer">
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default DashSidebar;
