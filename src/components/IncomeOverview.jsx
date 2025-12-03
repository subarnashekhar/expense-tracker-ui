import {useEffect, useState} from "react";
import {prepareIncomeLineChartData} from "../util/util.js";
import {Plus} from "lucide-react";

const IncomeOverview = ({transactions, onAddIncome}) => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        const result = prepareIncomeLineChartData(transactions);
        console.log(result);
        setChartData(result);

        return () => {};
    }, [transactions]);
    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <div>
                    <h5 className="text-lg">
                        Income Overview
                    </h5>
                </div>
                <button className="add-btn" onClick={onAddIncome}>
                    <Plus size={15} className="text-lg" /> Add Income
                </button>
            </div>
        </div>
    )
}

export default IncomeOverview;