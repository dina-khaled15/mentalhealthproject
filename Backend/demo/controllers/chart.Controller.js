const ChartData = require('../models/ChartData');

// Get chart data
exports.getChartData = async (req, res) => {
  try {
    const data = await ChartData.find();

    // Transform data into the format expected by the frontend
    const formattedData = [
      {
        id: 'expenses',
        color: 'black',
        data: data
          .filter((item) => item.type === 'expenses')
          .map((item) => ({ x: item.month, y: item.amount })),
      },
      {
        id: 'profit',
        color: 'blue',
        data: data
          .filter((item) => item.type === 'profit')
          .map((item) => ({ x: item.month, y: item.amount })),
      },
    ];

    res.status(200).json(formattedData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chart data', error });
  }
};

// Create new chart data
exports.createChartData = async (req, res) => {
  try {
    const { type, month, amount, color } = req.body;

    // Validate required fields
    if (!type || !month || !amount) {
      return res.status(400).json({ message: 'Type, month, and amount are required' });
    }

    const newChartData = new ChartData({
      type,
      month,
      amount,
      color: color || (type === 'expenses' ? 'black' : 'blue'), // Default color based on type
    });

    await newChartData.save();
    res.status(201).json({ message: 'Chart data created successfully', data: newChartData });
  } catch (error) {
    res.status(500).json({ message: 'Error creating chart data', error });
  }
};