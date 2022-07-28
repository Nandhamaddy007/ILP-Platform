import React, { Component } from "react";
import CanvasJSReact from "../../assets/charts/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class BarChart extends Component {
  constructor() {
    super();
    this.addSymbols = this.addSymbols.bind(this);
  }

  addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);

    if (order > suffixes.length - 1) order = suffixes.length - 1;

    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }

  render() {
    const options = {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title: {
        text: "Career List",
      },
      axisY: {
        title: "Number of Students",
        labelFormatter: this.addSymbols,
        scaleBreaks: {
          autoCalculate: true,
        },
      },
      axisX: {
        title: "Career Path",
        labelAngle: 0,
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "Engineer", y: 11820 },
            { label: "Agriculture", y: 5589 },
            { label: "Doctor", y: 3578 },
            { label: "Architect", y: 2745 },
            { label: "Nurse", y: 6389 },
            { label: "Lawyer", y: 4815 },
            { label: "Teacher", y: 5631 },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
      </div>
    );
  }
}

export default BarChart;
