import { IDeviceData } from './../../models/DeviceData';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Logging from '../../util/Logging';

interface historicalDeviceDataVariables{
  device_Id: string;
  minutes: Number;
}

export const deviceApi = createApi({
  reducerPath: 'deviceApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost',
    // baseUrl: 'http://128.199.19.252.com',
    baseUrl: 'https://genxiot.com',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Access-Control-Allow-Origin', '*')
      return headers
  }
  }),
  endpoints: (builder) => ({
    getDevicesByClientId: builder.query({
      query: (clientcode) => ({
        url: `/api/devices/getDevicesByClientId/${clientcode}`,
        method: 'GET',
        Headers :['Access-Control-Allow-Origin', '*']
      })
      
      
    }),
    readDeviceByDeviceId: builder.query({
      query: (device_ID) => ({
        url: `/api/devices/readDeviceBYDeviceId/${device_ID}`,
        method: 'GET'
      })
      
      
    }),
    
    getDeviceDatabyDeviceId: builder.query({
      query: (device_ID) => ({
        url: `/api/devicedata/readDeviceDataByDeviceID/${device_ID}`,
        method: 'GET'
        
      })
    }),
    getHistoricalDeviceDatabyDeviceId: builder.query<IDeviceData[],historicalDeviceDataVariables>({ 
      query: ({device_Id,  minutes }) => ({
        //  const { device_Id, minutes } = args;
        
        
        // url: `devicedata/readHistoricalDeviceDataByDeviceIDVariableName/8876859487/1660710410890`,
        
          url: `/api/devicedata/readHistoricalDeviceDataByDeviceIDVariableName/${device_Id}/${minutes}`,
        method: 'GET',
        transformResponse: (response: { data: IDeviceData[] }, meta, arg) => response.data,
        // providesTags: (result, error, id) => [{ type: 'GET' }],
        
         
        })
        
      
     
    }),
    
  }),
  
}
);

export const { useGetDevicesByClientIdQuery, useGetDeviceDatabyDeviceIdQuery,useReadDeviceByDeviceIdQuery,useGetHistoricalDeviceDatabyDeviceIdQuery } = deviceApi;