<div class="p-4">
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/3 p-2">
      <div class="bg-white rounded-lg shadow-md p-4">
        <h2 class="text-lg text-gray-800 font-semibold mb-4">Chart 1</h2>
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="pv" fill="#4caf50" />
        </BarChart>
      </div>
    </div>
    <div class="w-full md:w-1/3 p-2">
      <div class="bg-white rounded-lg shadow-md p-4">
        <h2 class="text-lg text-gray-800 font-semibold mb-4">Chart 2</h2>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="pv" stroke="#4caf50" />
        </LineChart>
      </div>
    </div>
    <div class="w-full md:w-1/3 p-2">
      <div class="bg-white rounded-lg shadow-md p-4">
        <h2 class="text-lg text-gray-800 font-semibold mb-4">Chart 3</h2>
        <PieChart width={500} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#4caf50"
            label
          />
        </PieChart>
      </div>
    </div>
  </div>
</div>

<script>
const data = [
  { name: "Page A", pv: 2400, amt: 2400 },
  { name: "Page B", pv: 1398, amt: 2210 },
  { name: "Page C", pv: 9800, amt: 2290 },
  { name: "Page D", pv: 3908, amt: 2000 },
  { name: "Page E", pv: 4800, amt: 2181 },
  { name: "Page F", pv: 3800, amt: 2500 },
  { name: "Page G", pv: 4300, amt: 2100 },
];
</script>