import DashboardWindow from "../components/DashboardWindow";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="flex items-start">
        <SideBar />
        <DashboardWindow />
      </main>
    </>
  );
};

export default Dashboard;
