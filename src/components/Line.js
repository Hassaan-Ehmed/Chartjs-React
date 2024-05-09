import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend

} from 'chart.js';
import { lineChartsData } from '../data/FAKE_DATA';


ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

export const LineGraph = ()=>{

    const options = {

        responsive:true,
        plugins:{
            legend:{
                position:"top"
            },
            title:{
                display:true,
                text:"Humidity & Temperature Graph"
            }
        }
    };


    return <Line options={options}  data={lineChartsData}/>
}