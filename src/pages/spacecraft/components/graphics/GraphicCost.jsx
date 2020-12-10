import React from "react";
import Chart from "react-google-charts";
import PropTypes from 'prop-types';

const GraphicCost = ({ data }) => {
  let api_request = data ? data.data : [];

  let costs = [];
  let names = [];

  if (api_request) {
    api_request.map(
      (point) => (
        costs.push(point.cost_per_launch), names.push(point.rocket_name)
      )
    );
  }

  const statistic = [["Rockets", "Costs"]];

  for (let i = 0; i in names; i++) {
    statistic.push([names[i], costs[i]]);
  }

  const options = {
    legend: { position: "bottom" },
     slices: [
    {
      color: "#156BFF"
    },
    {
      color: "#FFBB00"
    },
    {
      color: "#FF0086"
    },
    {
      color: "#2CFF00"
    }
  ],
  };

  return (
    <Chart
      chartType="PieChart"
      data={statistic}
      options={options}
      className="rocket-cost-graphic"
    />
  );
};

GraphicCost.propTypes = {
  data: PropTypes.object
}

export default GraphicCost;
