/** @format */
// https://www.chartjs.org/docs/latest/
// import Chart from "chart.js/auto";
// import Echarts from "echarts";

type drawDataType = {
  index: number;
};

class ChartJSDrawPie {
  draw(data: drawDataType, title: string): string {
    const { index } = data;
    return `${index}==>chart.js创建饼状图-${title}`;
  }
}

class EchartsDrawPie {
  draw(data: drawDataType, title: string): string {
    const { index } = data;
    return `${index}==>echarts.js创建饼状图-${title}`;
  }
}

export const drawPieTest = (): string[] => {
  const chartjsText = new ChartJSDrawPie().draw({ index: 0 }, "《chart.js》");
  const echartsText = new EchartsDrawPie().draw({ index: 1 }, "《echarts》");
  return [chartjsText, echartsText];
};
