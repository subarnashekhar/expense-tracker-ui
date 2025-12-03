import { useEffect, useState } from "react";
import {Plus} from "lucide-react";
import {prepareIncomeLineChartData} from "../util/util.js";

const ExpenseOverview = ({transactions, onExpenseIncome}) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareIncomeLineChartData(transactions);
        setChartData(result);

        return () => {};
    }, [transactions]);

    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <div className="">
                    <h5 className="text-lg">Expense Overview</h5>
                </div>

                <button className="add-btn" onClick={onExpenseIncome}>
                    <Plus size={15} className="text-lg" />
                    Add Expense
                </button>
            </div>

        </div>
    );
};

export default ExpenseOverview;
