//import * as React from 'react';
import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid'



const Table = (
    {
        rows,columns,
    }
)=> {
    const [pageSize,setPageSize] = useState(10);
  return (
    <div style={{ height: 400, width: '100%' }}>
      {(row) => row._id}
     

      <DataGrid
      style={{color:"#FFFFFF",
    }}
        rows={rows}
        columns={columns}
        
        getRowId={(row) => row.sl_no}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
       
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
export default Table;