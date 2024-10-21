'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function NationChart({nationData}) {
    return (
        <ResponsiveContainer width="80%" height={350}>
            <BarChart data={nationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="nation" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#84563C" barSize={50} />
            </BarChart>
        </ResponsiveContainer>
    );
}