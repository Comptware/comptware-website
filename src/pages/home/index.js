import DashboardLayout from "components/Layout";
import HomeList from "./features";

const HomePage = () => {
  return (
    <div>
      <DashboardLayout>
        <HomeList />
      </DashboardLayout>
    </div>
  );
};

export default HomePage;
