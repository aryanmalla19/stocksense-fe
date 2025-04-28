import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';  
import { deleteStock } from '../../../api/stocksApiService';

function StockRow({ stock, onEdit, theme, onDelete }) {
  const queryClient = useQueryClient(); 

  const { mutate: deleteStockMutation, isLoading: isDeleting } = useMutation({
    mutationFn: deleteStock,
    onSuccess: () => {
      queryClient.invalidateQueries(['stocks']);
      onDelete(stock.id);  
    },
    onError: (error) => {
      console.error('Error deleting stock:', error);
    },
  });

  return (
    <div
      className="grid py-2 px-2 my-2 rounded-md"
      style={{ gridTemplateColumns: '1fr 1.5fr 1fr 3fr 1fr' }}
    >
      <p>{stock.symbol}</p>
      <p>{stock.company_name}</p>
      <p>{stock.sector}</p>
      <p className="truncate">{stock.description}</p>
      <p>
        <button
          onClick={() => onEdit(stock)}
          className="cursor-pointer text-blue-500 hover:underline mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => deleteStockMutation(stock.id)}
          className={`cursor-pointer text-red-500 hover:underline ${isDeleting ? 'opacity-50' : ''}`}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </p>
    </div>
  );
}

export default StockRow;
