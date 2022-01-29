import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  SearchIcon,
  UserIcon,
  LogoutIcon,
  CubeIcon,
  PencilIcon,
  ChartPieIcon,
  ClockIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";
import {
  LineChart,
  Tooltip,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [opacity, setOpacity] = useState({
    uv: 1,
    pv: 1,
  });
  const data = [
    { name: "Test wiskunde", uv: 90, pv: 2400, amt: 2400 },
    { name: "Overhoring frans", uv: 60, pv: 4800, amt: 7800 },
    { name: "Taak Engels", uv: 70, pv: 4800, amt: 7800 },
    { name: "Test Nederlands", uv: 30, pv: 4800, amt: 7800 },
    { name: "Taak Chemie", uv: 50, pv: 4800, amt: 7800 },
    { name: "Taak LO", uv: 80, pv: 3600, amt: 3600 },
    { name: "Test wiskunde", uv: 90, pv: 2400, amt: 2400 },
    { name: "Overhoring frans", uv: 60, pv: 4800, amt: 7800 },
    { name: "Taak Engels", uv: 70, pv: 4800, amt: 7800 },
    { name: "Test Nederlands", uv: 30, pv: 4800, amt: 7800 },
    { name: "Taak Chemie", uv: 50, pv: 4800, amt: 7800 },
    { name: "Taak LO", uv: 80, pv: 3600, amt: 3600 },
    { name: "Test wiskunde", uv: 90, pv: 2400, amt: 2400 },
    { name: "Overhoring frans", uv: 60, pv: 4800, amt: 7800 },
    { name: "Taak Engels", uv: 70, pv: 4800, amt: 7800 },
    { name: "Test Nederlands", uv: 30, pv: 4800, amt: 7800 },
    { name: "Taak Chemie", uv: 50, pv: 4800, amt: 7800 },
    { name: "Taak LO", uv: 80, pv: 3600, amt: 3600 },
  ];

  const data01 = [
    { name: "Wiskunde", value: 90 },
    { name: "Frans", value: 60 },
    { name: "Engels", value: 70 },
    { name: "Nederlands", value: 30 },
    { name: "Chemie", value: 50 },
    { name: "LO", value: 80 },
  ];

  const results = [
    {
      name: "Test wiskunde",
      title: "Logaritmische veeltermfuncties",
      department: "",
      teacher: "A. Lissens",
      description: "Niet genoeg geoefend...",
    },
    // More results...
  ];

  return (
    <div className="bg-neutral-100 p-5">
      <div>
        <h3 className="uppercase text-neutral-600 text-xs font-extralight">
          Algemeen
        </h3>
        <h2 className="text-neutral-800 text-lg font-semibold">Overzicht</h2>
      </div>
      <div className="grid gap-4 grid-cols-3 grid-rows-1 py-5">
        <div className="bg-white border border-neutral-200 rounded-lg shadow-sm flex justify-between items-center p-5">
          <div>
            <p className="uppercase text-neutral-500 text-xs font-semibold">
              Testen afgelegd
            </p>
            <h2 className="uppercase text-neutral-700 text-lg font-semibold">
              542
            </h2>
          </div>
          <PencilIcon className="w-6 h-6 text-neutral-500" />
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg shadow-sm flex justify-between items-center p-5">
          <div>
            <p className="uppercase text-neutral-500 text-xs font-semibold">
              Totaal puntenpercentage
            </p>
            <h2 className="uppercase text-neuttral-700 text-lg font-semibold">
              72%
            </h2>
          </div>
          <ChartPieIcon className="w-6 h-6 text-neutral-500" />
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg shadow-sm flex justify-between items-center p-5">
          <div>
            <p className="uppercase text-neutral-500 text-xs font-semibold">
              Testen afgelegd
            </p>
            <h2 className="uppercase text-neutral-700 text-lg font-semibold">
              542
            </h2>
          </div>
          <PencilIcon className="w-6 h-6 text-neutral-500" />
        </div>
      </div>
      <div className="lg:space-x-3 lg:flex lg:items-center">
        <div className="bg-white px-3 py-1 rounded-lg border border-neutral-200 w-full">
          <div className="flex justify-between items-center pb-4 pt-2 text-neutral-500">
            <p className="uppercase text-xs font-semibold">
              Recente resultaten
            </p>
            <button className="p-1 rounded-full hover:bg-neutral-200">
              <DotsVerticalIcon className="w-5 h-5" />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              width={750}
              height={250}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              className="flex justify-center items-center flex-col"
            >
              <Line
                name="Percentage"
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white px-3 py-1 rounded-lg border border-neutral-200 mt-5 lg:mt-0">
          <div className="flex justify-between items-center pb-4 pt-2 text-neutral-500">
            <p className="uppercase text-xs font-semibold">Vakpercentages</p>
            <button className="p-1 rounded-full hover:bg-neutral-200">
              <ChartPieIcon className="w-5 h-5" />
            </button>
          </div>
          <ResponsiveContainer width={250} height={250}>
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data01}
                innerRadius={40}
                outerRadius={80}
                fill="#037cb8"
                cx="50%"
                cy="50%"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex flex-col my-5">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Percentage
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Titel
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Leerkracht
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {results.map((result) => (
                    <tr key={result.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-red-200 text-red-700 text-xs font-bold flex justify-center items-center">
                              30%
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {result.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {result.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {result.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {result.department}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Zichtbaar
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {result.teacher}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-sky-600 hover:text-sky-900">
                          Bekijk
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
