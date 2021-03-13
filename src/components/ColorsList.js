import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Color from './Color';

const fetchColors = async (key, page) => {
  const res = await fetch(`https://reqres.in/api/colors/?page=${page}`);

  return res.json();
};

const ColorsList = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, status } = usePaginatedQuery(
    ['colors', page],
    fetchColors,
    {
      staleTime: 2000,
      /*onSuccess: () => console.log('data fetched without a problem')*/
    }
  );
  return (
    <div>
      {status === 'loading' && <div>Loading data</div>}

      {status === 'error' && <div>Error fetching data</div>}

      {status === 'success' && (
        <>
          <ul className="flex justify-center items-center flex-col md:flex-row flex-wrap">
            {resolvedData.data.map((color) => (
              <Color key={color.id} color={color} />
            ))}
          </ul>
          <div className="flex justify-evenly mt-8 pt-8">
            <button
              onClick={() => setPage(1)}
              disabled={page === 1}
              className="text-blue-600 font-bold py-4 hover:text-red-700 outline-none focus:outline-none uppercase"
            >
              Previous
            </button>
            <span className="text-green-700 font-bold py-4 hover:text-blue-700 outline-none focus:outline-none uppercase">
              {page}
            </span>
            <button
              onClick={() => setPage(2)}
              className="text-blue-700 font-bold py-4 hover:text-red-700 outline-none focus:outline-none uppercase"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ColorsList;

/*IMPORTANT
--> { staleTime: 2000 } controls how long data is fresh for 

--> { usePaginatedQuery } resolvedData= the last successful data that we have access to
*/
