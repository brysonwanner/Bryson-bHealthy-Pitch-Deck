import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LabelList } from 'recharts';

// Data matched to the "105.7K views" 90-day screenshot which shows a massive spike around Oct 18
const dataTrend = [
  { name: 'Sep 3', views: 1200 },
  { name: 'Sep 10', views: 1500 },
  { name: 'Sep 18', views: 4000 }, // Small initial bump
  { name: 'Sep 25', views: 2000 },
  { name: 'Oct 3', views: 1800 },
  { name: 'Oct 10', views: 3500 },
  { name: 'Oct 15', views: 12000 }, // Start of viral spike
  { name: 'Oct 18', views: 48000 }, // HUGE Peak matched to image
  { name: 'Oct 21', views: 25000 },
  { name: 'Oct 29', views: 15000 },
  { name: 'Nov 5', views: 5000 },
  { name: 'Nov 12', views: 8000 }, // Secondary spike
  { name: 'Nov 22', views: 3000 },
  { name: 'Dec 1', views: 2500 },
];

const platformData = [
  { name: 'TikTok', reach: 38, fill: '#000000' }, 
  { name: 'Facebook', reach: 28, fill: '#1877F2' },
  { name: 'YouTube', reach: 18, fill: '#FF0000' },
  { name: 'Instagram', reach: 16, fill: '#E1306C' },
];

export const AnalyticsCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto p-2 md:p-4">
      {/* Chart 1: Growth Trend */}
      <div className="bg-slate-800 p-4 md:p-6 rounded-2xl border border-slate-700 shadow-xl">
        <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center">
          <span className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></span>
          90-Day View Velocity
        </h3>
        <p className="text-slate-400 text-xs md:text-sm mb-4 md:mb-6">Viral traction with ~105K recent views. Peak viral moment in October.</p>
        <div className="h-48 md:h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dataTrend}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} interval={2} />
              <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                itemStyle={{ color: '#34d399' }}
                formatter={(value: number) => [`${value.toLocaleString()}`, 'Views']}
              />
              <Area type="monotone" dataKey="views" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Platform Breakdown */}
      <div className="bg-slate-800 p-4 md:p-6 rounded-2xl border border-slate-700 shadow-xl">
        <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center">
          <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
          Audience Distribution
        </h3>
        <p className="text-slate-400 text-xs md:text-sm mb-4 md:mb-6">Relative reach and engagement by platform.</p>
        <div className="h-48 md:h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={platformData} layout="vertical" margin={{ right: 30 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={true} vertical={false} />
              <XAxis type="number" hide domain={[0, 100]} />
              <YAxis dataKey="name" type="category" stroke="#fff" width={70} fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                cursor={{fill: 'transparent'}}
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                formatter={(value: number) => [`${value}%`, 'Reach']}
              />
              <Bar dataKey="reach" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={24}>
                <LabelList dataKey="reach" position="right" fill="#94a3b8" fontSize={12} formatter={(val: number) => `${val}%`} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};