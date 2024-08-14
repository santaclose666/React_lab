import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { population } from "../App";

interface BarChartProps {
  data: population[];
  labels: string[];
}

const BarChart = ({ data, labels }: BarChartProps) => {
  const svgRef = useRef();
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    data: null,
  });

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const { width, height } = svg.node().getBoundingClientRect();

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d[labels[0]]))
      .range([0, width])
      .padding(0.03);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d[labels[1]])])
      .range([height, 0]);

    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => xScale(d[labels[0]]) + xScale.bandwidth() * 0.1)
      .attr("y", (d) => yScale(d[labels[1]]))
      .attr("width", xScale.bandwidth() * 0.8)
      .attr("height", (d) => height - yScale(d[labels[1]]))
      .attr("fill", (d) => d.color)
      .attr("rx", 6)
      .attr("ry", 6)
      .on("mouseenter", (event, d) => {
        const [x, y] = d3.pointer(event);
        setTooltip({ visible: true, x, y, data: d });
      })
      .on("mouseleave", () => {
        setTooltip({ visible: false, x: 0, y: 0, data: null });
      });
  }, [data, labels]);

  return (
    <div className="relative">
      <svg ref={svgRef} className="w-full h-64"></svg>
      {tooltip.visible && (
        <div
          className="absolute bg-gray-700 text-white text-xs rounded px-2 py-1"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip?.data[labels[0]]} : {tooltip?.data[labels[1]]}
        </div>
      )}
    </div>
  );
};

export default BarChart;
