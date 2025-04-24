// src/admin/user/usermanagement/IpoManagement.jsx
import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import IPOList from '../components/IPO/IPOList';
import IPOForm from '../components/IPO/IPOForm';

function IpoManagement() {
  const { theme } = useContext(ThemeContext);
  const [showForm, setShowForm] = useState(false);
  const [editPrice, setEditPrice] = useState(null);
  const [form, setForm] = useState({
    stockSymbol: '',
    openTime: '',
    closeTime: '',
    totalShares: '',
    issuePrice: '',
  });
  const [errors, setErrors] = useState({});

  const samplePrices = [
    { stockSymbol: 'AAPL', openTime: '10:00', closeTime: '15:00', totalShares: 1000000, issuePrice: 150.0 },
    { stockSymbol: 'GOOGL', openTime: '10:30', closeTime: '16:00', totalShares: 500000, issuePrice: 135.5 },
    { stockSymbol: 'MSFT', openTime: '11:00', closeTime: '14:30', totalShares: 750000, issuePrice: 200.75 },
  ];



  const handleEdit = (price) => {
    setEditPrice(price);
    setForm({
      stockSymbol: price.stockSymbol,
      openTime: price.openTime,
      closeTime: price.closeTime,
      totalShares: price.totalShares.toString(),
      issuePrice: price.issuePrice.toString(),
    });
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditPrice(null);
    setForm({
      stockSymbol: '',
      openTime: '',
      closeTime: '',
      totalShares: '',
      issuePrice: '',
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'stockSymbol' ? value.toUpperCase() : value,
    }));
  };

  const validateTimeRange = (time) => {
    if (!time) return false;
    return time >= '10:00' && time <= '17:00';
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.stockSymbol || !/^[A-Z]+$/.test(form.stockSymbol)) {
      newErrors.stockSymbol = 'Stock symbol must contain only letters.';
    }

    if (!form.openTime || !validateTimeRange(form.openTime)) {
      newErrors.openTime = 'Open time must be between 10:00 AM and 5:00 PM.';
    }
    if (!form.closeTime || !validateTimeRange(form.closeTime)) {
      newErrors.closeTime = 'Close time must be between 10:00 AM and 5:00 PM.';
    }

    if (!newErrors.closeTime && form.closeTime <= form.openTime) {
      newErrors.closeTime = 'Close time must be after open time.';
    }

    if (!form.totalShares || !/^\d+$/.test(form.totalShares)) {
      newErrors.totalShares = 'Total shares must be a positive number.';
    }

    if (!form.issuePrice || !/^\d+(\.\d{1,2})?$/.test(form.issuePrice)) {
      newErrors.issuePrice = 'Issue price must be a valid number with up to 2 decimal places.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid:', form);
      handleCancel();
    }
  };

  return (
    <div className="mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8 text-[#9E15BF]">
        <h1 className="text-2xl md:text-3xl font-bold py-2">IPO Management</h1>
      </div>

      <div
        className={`rounded-md p-8 ${
          theme === 'dark' ? 'bg-dark-bg shadow-md shadow-black/30' : 'bg-white border border-gray-200 shadow-md'
        }`}
      >
        <IPOList
          prices={samplePrices}
          onAdd={() => setShowForm(true)}
          onEdit={handleEdit}
          theme={theme}
        />
        {showForm && (
          <IPOForm
            form={form}
            errors={errors}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            editPrice={editPrice}
            theme={theme}
          />
        )}
      </div>
    </div>
  );
}

export default IpoManagement;

