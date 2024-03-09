// pages/financial-management.js

"use client";

import React, { useState, useMemo } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import { useTable } from 'react-table';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { BarChart, XAxis, YAxis, CartesianGrid } from 'recharts';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement
);

const FinancialManagement = () => {
    // Initialize state for form inputs (Placeholder for actual implementation)
    const [budget, setBudget] = useState('');
    const [forecast, setForecast] = useState('');
    const [budgetSuggestion, setBudgetSuggestion] = useState('');
    const [forecastPrediction, setForecastPrediction] = useState('');



    const generateBudgetSuggestion = (budget) => {
        if (!budget) return '';

        const numBudget = Number(budget);
        if (numBudget <= 10000) {
            return 'Consider allocating more to player development and scouting.';
        } else if (numBudget <= 50000) {
            return 'Balanced allocation recommended: player salaries, facility upgrades, and marketing.';
        } else if (numBudget <= 100000) {
            return 'Opportunity for significant investments in marketing and infrastructure.';
        } else {
            return 'You have a substantial budget! Consider strategic investments across all areas, including international expansion.';
        }
    };

    const generateForecastPrediction = (forecast) => {
        if (!forecast) return '';

        const numForecast = Number(forecast);
        if (numForecast <= 20) {
            return 'Market trends suggest focusing on domestic competitions and cost-effective signings.';
        } else if (numForecast <= 50) {
            return 'Moderate growth expected. Consider investments in youth development and facility improvements.';
        } else if (numForecast <= 80) {
            return 'Strong growth anticipated. Opportunities for expanding marketing efforts and enhancing stadium experiences.';
        } else {
            return 'Exceptional growth forecasted. Explore strategic signings, global branding, and infrastructure expansions.';
        }
    };


    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5, // Adjust this to make charts smaller or larger
        plugins: {
            legend: {
                position: 'top',
            },
        },
        layout: {
            padding: 10,
        },
    };

    // Placeholder data for charts
    const budgetData = {
        labels: ['Budget', 'Expenses', 'Revenue'],
        datasets: [{
            label: 'Financial Overview',
            data: [50000, 30000, 45000],
            backgroundColor: ['#4F46E5', '#EC4899', '#F59E0B'],
        }],
    };

    const expenseDistribution = {
        labels: ['Salaries', 'Equipment', 'Facilities', 'Miscellaneous'],
        datasets: [{
            data: [12000, 8000, 6000, 4000],
            backgroundColor: ['#93C5FD', '#A78BFA', '#FBCFE8', '#FDE68A'],
        }],
    };

    const salaryData = {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Salaries',
            data: [20000, 25000, 22000, 27000],
            backgroundColor: '#4F46E5',
            borderColor: '#4F46E5',
            fill: false,
        }, {
            label: 'Bonuses',
            data: [5000, 3000, 4000, 2000],
            backgroundColor: '#10B981',
            borderColor: '#10B981',
            fill: false,
        }],
    };

    const investmentData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Investment Growth',
            data: [5, 15, 10, 20],
            backgroundColor: '#F59E0B',
            borderColor: '#F59E0B',
            fill: false,
        }],
    };


    const sponsorshipData = useMemo(() => [
        { sponsor: 'Nike', value: '1,000,000', duration: '3 years', status: 'Active' },
        { sponsor: 'Team Viewer', value: '2,000,000', duration: '0.5 years', status: 'Active' },
        { sponsor: 'Jeep', value: '500,000', duration: '5 years', status: 'Inactive' },
        { sponsor: 'Apple', value: '300,000', duration: '2 years', status: 'Ongoing' },
        { sponsor: 'Chase', value: '1,000,000', duration: '4 years', status: 'Failed' },

        // Add more sponsors here
    ], []);

    const sponsorshipColumns = useMemo(() => [
        { Header: 'Sponsor', accessor: 'sponsor' },
        { Header: 'Deal Value', accessor: 'value' },
        { Header: 'Duration', accessor: 'duration' },
        { Header: 'Status', accessor: 'status' },
    ], []);

    const sponsorshipTableInstance = useTable({ columns: sponsorshipColumns, data: sponsorshipData });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns: sponsorshipColumns,
        data: sponsorshipData,
    });

    const merchandiseData = [
        { name: 'Jerseys', value: 400 },
        { name: 'Footballs', value: 300 },
        { name: 'Posters', value: 300 },
        // Add more categories
    ];


    const ticketSalesData = [
        { name: 'Match 1', revenue: 120000 },
        { name: 'Match 2', revenue: 150000 },
        // Add more matches
    ];

    return (
        <div className="flex flex-col min-h-full bg-[#fffff6] p-8">
            <h1 className="text-[#660000] font-bold text-2xl mb-4">Financial Management</h1>
            <div className="flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                    {/* Charts Section */}
                    <div className="col-span-1 lg:col-span-2 xl:col-span-4">
                        {/* Row 1 for Charts */}
                        <div className="flex flex-wrap justify-between">
                            {/* Financial Overview */}
                            <div className="w-full lg:w-1/2 xl:w-1/4 p-2">
                                <div className="bg-white rounded-xl shadow p-4">
                                    <h2 className="text-lg font-semibold text-[#660000] mb-2">Financial Overview</h2>
                                    <Bar data={budgetData} options={chartOptions} />
                                </div>
                            </div>

                            {/* Expense Distribution */}
                            <div className="w-full lg:w-1/2 xl:w-1/4 p-2">
                                <div className="bg-white rounded-xl shadow p-4">
                                    <h2 className="text-lg font-semibold text-[#660000] mb-2">Expense Distribution</h2>
                                    <Doughnut data={expenseDistribution} options={chartOptions} />
                                </div>
                            </div>

                            {/* Salary and Bonuses */}
                            <div className="w-full lg:w-1/2 xl:w-1/4 p-2">
                                <div className="bg-white rounded-xl shadow p-4">
                                    <h2 className="text-lg font-semibold text-[#660000] mb-2">Salary and Bonuses</h2>
                                    <Line data={salaryData} options={chartOptions} />
                                </div>
                            </div>

                            {/* Investment Tracking */}
                            <div className="w-full lg:w-1/2 xl:w-1/4 p-2">
                                <div className="bg-white rounded-xl shadow p-4">
                                    <h2 className="text-lg font-semibold text-[#660000] mb-2">Investment Tracking</h2>
                                    <Line data={investmentData} options={chartOptions} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Budgeting and Forecasting Section */}
                    <div className="col-span-1 lg:col-span-2 xl:col-span-4">
                        <div className="flex flex-wrap -mx-2">
                            {/* Budget Planning */}
                            <div className="w-full px-2 mb-4">
                                <div className="bg-white rounded-lg shadow p-4">
                                    <h2 className="text-lg font-semibold text-[#660000]">Budget Planning</h2>
                                    <input
                                        type="number"
                                        placeholder="Enter your budget"
                                        value={budget}
                                        onChange={(e) => {
                                            const newBudget = e.target.value;
                                            setBudget(newBudget);
                                            const suggestion = generateBudgetSuggestion(newBudget);
                                            setBudgetSuggestion(suggestion);
                                        }}
                                        className="mt-2 p-2 text-black w-full border rounded"
                                    />
                                    {/* Budget Suggestion Display */}
                                    {budgetSuggestion && (
                                        <div className="mt-4 p-4 text-black bg-[#E5E7EB] rounded">
                                            <h3 className="text-lg font-semibold">Budget Suggestion:</h3>
                                            <p>{budgetSuggestion}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Forecasting */}
                            <div className="w-full px-2 mb-4">
                                <div className="bg-white rounded-lg shadow p-4">
                                    <h2 className="text-lg font-semibold text-[#660000]">Forecasting</h2>
                                    <input
                                        type="text"
                                        placeholder="Forecast details"
                                        value={forecast}
                                        onChange={(e) => {
                                            const newForecast = e.target.value;
                                            setForecast(newForecast);
                                            const prediction = generateForecastPrediction(newForecast);
                                            setForecastPrediction(prediction);
                                        }}
                                        className="mt-2 p-2 text-black w-full border rounded"
                                    />
                                    {/* Forecast Prediction Display */}
                                    {forecastPrediction && (
                                        <div className="mt-4 p-4 text-black bg-[#E5E7EB] rounded">
                                            <h3 className="text-lg font-semibold">Forecast Prediction:</h3>
                                            <p>{forecastPrediction}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Financial Elements Section */}
                    {/* Implement similar layout adjustments for new elements like Sponsorship Deals, Merchandise Sales, etc. */}

                    {/* Sponsorship Table */}

                    <div className="mb-8">
                        <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                {headerGroups.map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map(column => (
                                            <th {...column.getHeaderProps()} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200 text-black">
                                {rows.map(row => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map(cell => (
                                                <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap">
                                                    {cell.render('Cell')}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );

};

export default FinancialManagement;