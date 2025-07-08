//npx rollup -c
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import {
  TooltipComponent,
  GridComponent,
  AxisPointerComponent,
  TitleComponent, // 如果你需要标题，可以保留
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// 注册必须的组件
echarts.use([
  LineChart,
  TooltipComponent,
  GridComponent,
  AxisPointerComponent,
  TitleComponent, // 如果你需要标题，可以保留
  CanvasRenderer,
]);

export { echarts };
