'use client';
import React from 'react';

const StatsCard = ({ icon, value, label, suffix = '' }) => (
  <div className="text-center">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 mx-auto mb-3">
      {icon}
    </div>
    <p data-value={value} className="stat-value text-4xl font-bold text-primary-400 mb-1">
      0
    </p>
    <p className="text-sm text-neutral-600">{label}</p>
  </div>
);

export default StatsCard;