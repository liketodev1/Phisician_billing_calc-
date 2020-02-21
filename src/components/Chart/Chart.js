import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {

  state = {
    chartData: {}
  };


  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: ['01/03', '02/03', '03/03', '04/03', '05/03', '06/03'],
        datasets: [
          {
            label: null,
            data: [
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            radius: 8,
            tension: 0,
            borderCapStyle: 'square',
            borderDash: [10, 10],
            fill: '',
            backgroundColor: [
              '#2E6887',
              '#73B6C4',
              '#4FC7B5',
              '#B3E1EB',
              '#5FA3B9',
              '#4FC7B5',
            ],
            borderColor: '#0F3E64',
            borderStyle: 'dashed',
            borderWidth: 1
          }
        ],
        options: {
          layout: {
            padding: {
              left: 50,
              right: 0,
              top: 0,
              bottom: 0
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <div>
        <Line
          data={ this.state.chartData }
          // legend={ }
        />
      </div>
    );
  }
}

export default Chart;