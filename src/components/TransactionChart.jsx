import React from "react";
import Chart from "react-apexcharts";

const TransactionChart = () => {
  const options = {
    series: [{
      name: 'PRODUCT A',
      data: [44, 55, 41, 67, 22, 43]
    }, {
      name: 'PRODUCT B',
      data: [13, 23, 20, 8, 13, 27]
    }, {
      name: 'PRODUCT C',
      data: [11, 17, 15, 15, 21, 14]
    }, {
      name: 'PRODUCT D',
      data: [21, 7, 25, 13, 22, 8]
    }],
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    xaxis: {
      type: 'datetime',
      categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
        '01/05/2011 GMT', '01/06/2011 GMT'
      ],
    },
    legend: {
      position: 'right',
      offsetY: 40
    },
    fill: {
      opacity: 1
    }
  };

  return (
  <div className="bg-white w-[20.5rem] md:w-full">
      <div className="flex flex-col h-[16rem] flex-1 p-4 reounded-sm border border-gray-200 ">
        <strong className='tet-gray-700 font-medium'>Buyer Profile</strong>
      <div className="w-full mt-3 flex-1 text-xs">
      <Chart options={options} series={options.series} type="bar" height={170} className="md:w-[700px] w-[300px]"/>
      </div>
    </div>
  </div>
  );
};

export default TransactionChart;
