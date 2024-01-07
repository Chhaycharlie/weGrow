import DashboardLayout from "../../components/Layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="w-full h-full bg-white">
        <h1 className="text-3xl p-6">Hello Admin</h1>
        <div className="flex justify-around w-full h-full">
          <div>Box</div>
          <div>Box</div>
          <div>Box</div>
          <div>Box</div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
