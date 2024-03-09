"use client"

import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { LineElement, PointElement } from 'chart.js';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement
);


const FitnessHealthManagement = () => {
    // Sample health data
    const healthData = {
        labels: ['Heart Rate', 'Calories Burned', 'Steps', 'Sleep Hours'],
        datasets: [
            {
                label: 'Weekly Summary',
                data: [75, 2200, 10000, 8], // Example data
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1,
            },
        ],
    };

    // For DatePicker
    const [selectedDate, setSelectedDate] = useState(new Date());

    const localizer = momentLocalizer(moment);

    const [events, setEvents] = useState([
        {
            start: moment().toDate(),
            end: moment().add(1, "days").toDate(),
            title: "Custom Diet Plan",
        },
        {
            start: moment().add(2, "days").toDate(),
            end: moment().add(3, "days").toDate(),
            title: "Injury Recovery Plan",
        },
        {
            start: moment().add(4, "days").toDate(),
            end: moment().add(5, "days").toDate(),
            title: "AI Health Improvement Plan",
        },
        // Add more events as needed
    ]);

    const performanceData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Training Intensity',
                data: [70, 75, 80, 85], // Example data
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Performance Score',
                data: [60, 65, 70, 75], // Example data
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }
        ],
    };

    return (
        <div className="p-8 bg-[#f0f4f8] min-h-screen">
            <h1 className="text-3xl font-bold text-[#660000] mb-6">Fitness and Health Management</h1>
    
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
                {/* Health Data Visualization */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <h2 className="text-xl font-semibold text-[#660000] p-4 border-b">Weekly Health Summary</h2>
                    <div className="p-4 relative" style={{ height: '400px' }}>
                        <Bar data={healthData} options={{ maintainAspectRatio: true }} />
                    </div>
                </div>
    
                {/* Workout Planner */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <h2 className="text-xl font-semibold text-[#660000] p-4 border-b">Workout Planner</h2>
                    <div className="p-4 relative" style={{ height: '350px' }}>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: '100%', width: '100%' }}
                        />
                    </div>
                </div>
    
                {/* Athlete Performance Analysis */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden col-span-1 lg:col-span-2">
                    <h2 className="text-xl font-semibold text-[#660000] p-4 border-b">Athlete Performance Analysis</h2>
                    <div className="p-4 relative" style={{ height: '200px' }}>
                        <Bar data={performanceData} options={{ maintainAspectRatio: true }} />
                    </div>
                </div>
            </div>
        </div>
    );
    

};


export default FitnessHealthManagement;
