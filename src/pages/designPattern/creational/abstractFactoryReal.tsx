/** @format */

import Chart from "chart.js/auto";

type ChartJsPieDataType = {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
      backgroundColor: string[];
    }
  ];
};

class ChartJSDrawPie {
  draw(ctx: HTMLCanvasElement, data: ChartJsPieDataType, title: string) {
    new Chart(ctx, {
      type: "pie",
      data: data,
      options: {
        responsive: true,

        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: title,
          },
        },
      },
    });
  }
}

export const drawPieTest = (ctx: HTMLCanvasElement) => {
  new ChartJSDrawPie().draw(
    ctx,
    {
      labels: ["Red", "Orange", "Yellow", "Green", "Blue"],

      datasets: [
        {
          label: "Dataset 1",
          data: [23, 27, 49, 1],
          backgroundColor: ["Red", "Orange", "Yellow", "Green", "Blue"],
        },
      ],
    },
    "饼状图"
  );
};
