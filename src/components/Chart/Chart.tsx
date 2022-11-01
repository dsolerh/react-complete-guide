import './Chart.css'
import ChartBar from './ChartBar';

interface ChartProps {
    dataPoints: {value:number,label:string}[]
}

function Chart({dataPoints}:ChartProps) {
    const max = Math.max(...dataPoints.map(dp=>dp.value))
    console.log(max);
    
    return (
        <div className="chart">
            {dataPoints.map(dp=>(
                <ChartBar
                    key={dp.label}
                    label={dp.label}
                    value={dp.value} 
                    max={max}
                />
            ))}
        </div>
    );
}

export default Chart;