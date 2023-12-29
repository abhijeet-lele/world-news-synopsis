import React from 'react';

const data = {
  entities: [
    { name: 'Entity 1', value: 20, year: 2022 },
    // ... more entity data
  ],
  persons: [
    { name: 'Person 1', value: 35, year: 2023 },
    // ... more person data
  ],
  tonality: [
    { month: 1, value: 0.7, year: 2022 },
    // ... more tonality data for each month and year
  ],
  actionWeightage: [
    { month: 1, value: 42, year: 2023 },
    // ... more action weightage data for each month and year
  ],
  years: [2022, 2023, 2024], // Available years for selection
};

export default data;