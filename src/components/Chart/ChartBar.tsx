import './ChartBar.css'

interface ChartBarProps {
    value: number,
    max: number,
    label: string
}

function ChartBar({ value, max, label }: ChartBarProps) {
    let barFillHeight = '0%'

    if (max > 0) {
        barFillHeight = `${Math.round(value / max) * 100}%`
    }

    console.log(label,barFillHeight);
    
    return (
        <div className='chart-bar'>
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    );
}

export default ChartBar;