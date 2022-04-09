import axios from 'axios';
import React ,{ useEffect,useState } from 'react'
import Table from './Table'
import getData from './json'
 

const columns= [


 
   /*{field: 'sl_no', headerName: 'sl_no',},
   {field: 'business_code',headerName: 'business_code',type: 'number'}*/
   { field:'sl_no',headerName:'SL No',width:70},
   { field: 'business_code', headerName: 'business code', width: 90, },
   { field: 'cust_number', headerName:'cust number', width:80},
   { field: 'clear_date',headerName:'clear date', width:70},
   { field: 'buisness_year',headerName:'buisness year', width:90},
   { field: 'doc_id',headerName:'doc id', width:70},
   { field: 'posting_date',headerName: 'posting date',width: 80},
   { field: 'document_create_date', headerName: 'document create date', width: 90 },
   { field: 'document_create_date1',headerName: 'document create date1', width: 90 },
   { field: 'due_in_date',headerName:'due in date', width:80},
   { field: 'invoice_currency',headerName:'invoice currency', width:90},
   { field: 'document_type',headerName:'document type', width:90},
   { field: 'posting_id',headerName:'posting id', width:70},
   { field: 'area_business',headerName:'area business', width:90},
   { field: 'total_open_amount', headerName: 'total open amount',width: 90},
   { field: 'baseline_create_date',headerName: 'baseline create date', width: 90 },
   { field: 'cust_payment_terms',headerName: 'cust payment terms', width: 90 },
   { field: 'invoice_id', headerName:'invoice id', width:60},
   { field: 'isOpen',headerName:'isOpen', width:70},
   { field: 'aging_bucket',headerName:'Aging bucket', width:90},
   { field: 'is_deleted',headerName:'Is Deleted', width:70}
];
const Execute = (onError) => {
  

    const[data,setData] = useState([]);
    useEffect(
        async() => {
          setData(await getData());
        },[]); 
       console.log(data);
   
    return (
        <div  >
          <Table
          
            style={{color:'#FFFFFF'}}
            rows={data}
            columns={columns}
            
            
            
            
          />
         </div>
    
   
       
     
        
    );
};
export default Execute;
