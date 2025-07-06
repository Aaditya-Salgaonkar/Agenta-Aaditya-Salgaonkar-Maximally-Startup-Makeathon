```
<div class="p-4">
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/3 xl:w-1/4 p-3">
      <div class="bg-white border border-gray-300 rounded-lg shadow-md p-4">
        <h2 class="text-lg text-gray-800 font-medium mb-2">Chart 1</h2>
        <RechartChart type="bar" data={chartData1} />
      </div>
    </div>
    <div class="w-full md:w-1/3 xl:w-1/4 p-3">
      <div class="bg-white border border-gray-300 rounded-lg shadow-md p-4">
        <h2 class="text-lg text-gray-800 font-medium mb-2">Chart 2</h2>
        <RechartChart type="line" data={chartData2} />
      </div>
    </div>
    <div class="w-full md:w-1/3 xl:w-1/4 p-3">
      <div class="bg-white border border-gray-300 rounded-lg shadow-md p-4">
        <h2 class="text-lg text-gray-800 font-medium mb-2">Chart 3</h