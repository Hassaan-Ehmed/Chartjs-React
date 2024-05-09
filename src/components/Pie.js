import {Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend

} from 'chart.js';
import { lineChartsData, pieChartsData } from '../data/FAKE_DATA';


ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
);
export const PieChart = ()=>{
const options = {};

return <Pie options={options} data={pieChartsData}/>


};