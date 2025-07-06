import React from 'react'
import { PageHeader, Content, Layout } from 'antd'
import Recharts from 'recharts-wrapper'

const { Chart } = Recharts

const AnalyticsPage = () => (
  <Layout>
    <PageHeader title="Analytics Dashboard" />
    <Content>
      <Chart
        data={[
          { name: 'Page A', pv: 2400, uv: 2400, amt: 2400 },
          { name: 'Page B', pv: 1398, uv: 2210, amt: 2290 },
          { name: 'Page C', pv: 9800, uv: 2290, amt: 2000 },
          { name: 'Page D', pv: 3908, uv: 2000, amt: 2181 },
          { name: 'Page E', pv: 4800, uv: 2181, amt: 2181 },
          { name: 'Page F', pv: 3800, uv: 2181, amt: 2181 },
          { name: 'Page G', pv: 4300, uv: 2181, amt: 2181 },
        ]}
      >
        <Chart.Bar dataKey="pv" name="Page Views" stackId="a" fill="#8884d8" />
        <Chart.Bar dataKey="uv" name="Unique Visitors" stackId="a" fill="#82ca9d" />
      </Chart>
    </Content>
  </Layout>
)

export default AnalyticsPage