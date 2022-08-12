import React from "react";
import ReactApexChart from "react-apexcharts";
class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [74, 55],
      options: {
        chart: {
          width: 380,
          type: "donut",
          dropShadow: {
            enabled: true,
            color: "#111",
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2,
          },
        },
        legend: {
          position: "bottom",
          fontSize: "14px",
          fontFamily: "Poppins",
        },
        stroke: {
          width: 0,
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  showAlways: true,
                  show: true,
                  fontSize: "20px",
                  fontFamily: "Poppins",
                },
              },
            },
          },
        },
        labels: ["Male", "Female"],

        dropShadow: {
          blur: 3,
          opacity: 0.8,
        },

        dataLabels: {
          enabled: true,
          style: {
            fontSize: "0px",
            fontFamily: "Poppins",
            fontWeight: "bold",
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: [],
          },
        },

        states: {
          hover: {
            filter: "none",
          },
        },
        theme: {
          palette: "palette2",
        },
        // title: {
        //   text: "students",
        // },
        responsive: [
          {
            breakpoint: 481,
            options: {
              chart: {
                width: 230,
              },
              legend: {
                position: "bottom",
                fontSize: "14px",
                fontFamily: "Poppins",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={280}
        />
      </div>
    );
  }
}
export default DonutChart;
