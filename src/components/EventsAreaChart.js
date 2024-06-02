import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EventsAreaChart = ({ data }) => {
    const transformedData = data.reduce((acc, curr) => {
        const date = new Date(curr.timestamp).toLocaleDateString();
        if (!acc[date]) acc[date] = 0;
        acc[date]++;
        return acc;
    }, {});

    const chartData = Object.keys(transformedData).map(date => ({ date, count: transformedData[date] }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="date" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default EventsAreaChart;
