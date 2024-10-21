'use client';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function VisionChart({ visionData }) {
    const visionColors = ['#FF4500', '#1E90FF', '#9400D3', '#00CED1', '#00FA9A', '#FFD700', '#228B22'];
    return (
        <ResponsiveContainer width="100%" height={250}> 
            <PieChart>
                <Pie
                    data={visionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={75}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {visionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={visionColors[index % visionColors.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
}