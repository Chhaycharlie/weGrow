import DashboardLayout from "../../components/Layout/DashboardLayout";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { countAll, getAllRecruitment } from "../../api/post.api";
import { calculatePostsByMonth } from "../../utils/Helper";

const Dashboard = () => {
  const [countPostByMonth, setCountPostByMonth] = useState(null);
  const [totalPost, setTotalPost] = useState(null);
  const [totalApply, setTotalApply] = useState(null);
  const [totalUsers, setTotalUsers] = useState(null);
  const [totalInspiration, setTotalInspiration] = useState(null);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "statistic of total post by month",
      },
    },
  };

  const labels = [
    "December",
    "Jebruary",
    "February",
    "March",
    "April",
    "May",
    "June",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Total Posts",
        data: countPostByMonth,
        backgroundColor: "rgb(66 165 245)",
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllRecruitment();
        const countData = await countAll();
        const countsByMonth = calculatePostsByMonth(data);
        setTotalPost(countData?.totalPost ?? 0);
        setTotalApply(countData?.totalAppy ?? 0);
        setTotalInspiration(countData?.totalInspiration ?? 0);
        setTotalUsers(countData?.totalUser ?? 0);
        setCountPostByMonth(countsByMonth);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(countPostByMonth);

  return (
    <DashboardLayout>
      <div className="w-full h-full mb-10 bg-white">
        <h1 className="text-3xl p-6">Hello Admin!</h1>

        <div className="flex justify-around w-full min-h-20 h-auto my-10 flex-wrap text-white">
          <h1 className="text-gray-900 text-2xl">Summary:</h1>
          <div className="w-40 h-20 flex flex-col justify-center items-center bg-blue-400 rounded-lg">
            <h1 className="text-center">Total Recruitment Posts</h1>
            <h1>{totalPost}</h1>
          </div>
          <div className="w-40 flex flex-col justify-center items-center bg-blue-400 rounded-lg">
            <h1 className="text-center">Total Apply</h1>
            <h1>{totalApply}</h1>
          </div>
          <div className="w-40  flex flex-col justify-center items-center bg-blue-400 rounded-lg">
            <h1 className="text-center">Total Users</h1>
            <h1>{totalUsers}</h1>
          </div>
          <div className="w-40  flex flex-col justify-center items-center bg-blue-400 rounded-lg">
            <h1 className="text-center">Total Post Inspirations</h1>
            <h1>{totalInspiration}</h1>
          </div>
        </div>
        <div className="mx-auto w-[80%] h-[70%]">
          <Bar options={options} data={data} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
