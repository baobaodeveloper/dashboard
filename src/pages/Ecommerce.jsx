import React from 'react';
import { BsDot, BsThreeDots } from 'react-icons/bs';
import {
  SparkLineChart,
  StackedChart,
  PieChart,
  Report,
  Dropdown,
  Button,
  LineChart,
} from '../components';
import { useSateContext } from '../context/ContextProvider';
import {
  SparklineAreaData,
  ecomPieChartData,
  dropdownData,
  recentTransactions,
  lineCustomSeries,
  weeklyStats,
  medicalproBranding,
} from '../data/dummy';
import product9 from '../data/product9.jpg';

const Ecommerce = () => {
  const { currentColor } = useSateContext();
  return (
    <div className='mt-20 '>
      <Report />

      <div className='2xl:flex-row flex flex-col w-full items-center 2xl:justify-center mt-5 2xl:gap-20 gap-10'>
        <div className='lgx:w-780 bg-white dark:bg-secondary-dark-bg rounded-lg p-4 w-full'>
          <div className='flex justify-between items-center w-full mb-8'>
            <h3 className='lg:text-xl text-md font-semibold dark:text-slate-200'>
              Revenue Updates
            </h3>
            <div className='flex items-center gap-x-2'>
              <div className='flex items-center dark:text-slate-200'>
                <BsDot className='text-4xl dark:text-slate-200' />
                <span className='font-semibold dark:text-slate-200 '>
                  Expense
                </span>
              </div>
              <div className='flex items-center'>
                <BsDot className='text-4xl text-green-400' />
                <span className='font-semibold text-green-400'>
                  Budget
                </span>
              </div>
            </div>
          </div>

          <div className='lgx:flex-row flex-col flex items-center lgx:justify-between'>
            <div className='lgx:w-[48%] w-full  m-4 flex flex-col gap-2 items-center lgx:border-r'>
              <div className='w-full ml-10'>
                <div className='mb-4'>
                  <span className=' relative'>
                    <span className='lg:text-3xl text-xl font-semibold dark:text-slate-200'>
                      $93,438
                    </span>
                    <span
                      className='absolute -right-10 top-0 lg:text-sm text-[10px] text-white w-8 h-4 lg:w-10 lg:h-6 
                    bg-green-400 rounded-xl flex justify-center items-center'
                    >
                      23%
                    </span>
                  </span>
                  <p className='text-slate-400 font-semibold dark:text-slate-200'>
                    Budget
                  </p>
                </div>
                <div>
                  <span className='lg:text-3xl text-xl font-semibold dark:text-slate-200'>
                    $48,418
                  </span>
                  <p className='text-slate-400 font-semibold dark:text-slate-200'>
                    Expense
                  </p>
                </div>
              </div>
              <div className=' text-center'>
                <SparkLineChart
                  color='#ff5c8e'
                  type='Line'
                  id='sparkline_1'
                  height='100px'
                  width='320px'
                  currentColor='#ff5c8e'
                  data={SparklineAreaData}
                />
              </div>

              <Button
                content='Download Report'
                bgcolor='#ff5c8e'
                className='inline-block px-2'
              />
            </div>
            <div className='lgx:w-[50%] w-full'>
              <StackedChart />
            </div>
          </div>
        </div>
        <div className='lgx:w-400 w-full'>
          <div className='flex flex-col justify-between content-between h-full'>
            <div
              style={{ backgroundColor: currentColor }}
              className='h-[200px]  text-white  rounded-lg p-4'
            >
              <div className='flex justify-between text-xl font-semibold mt-4 mb-2'>
                <span>Earnings</span>
                <div>
                  <span>$63,448.78</span>
                  <p className='text-sm text-slate-300'>
                    Monthly revenue
                  </p>
                </div>
              </div>
              <div className='w-full flex justify-center'>
                <SparkLineChart
                  type='Column'
                  color='#fff'
                  id='sparkline_2'
                  currentColor={currentColor}
                  data={SparklineAreaData}
                  height='100px'
                  width='100%'
                />
              </div>
            </div>
            <div className='h-[200px]  bg-white dark:bg-secondary-dark-bg mt-3 flex justify-between items-center py-8 px-6 rounded-lg'>
              <div className=''>
                <span className='text-xl font-bold dark:text-slate-200'>
                  $43,246
                </span>
                <p className='text-sm font-semibold text-slate-300 dark:text-slate-200'>
                  Yearly sales
                </p>
              </div>

              <PieChart
                data={ecomPieChartData}
                height='150px'
                visible={false}
                width='150px'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='2xl:flex-row flex flex-col w-full items-center 2xl:justify-center mt-5 2xl:gap-20 gap-10'>
        <div className='lgx:w-400 bg-white dark:bg-secondary-dark-bg rounded-lg p-4 w-full dark:text-slate-200'>
          <div className='flex justify-between items-center mb-4'>
            <h4 className='text-lg font-semibold dark:text-slate-200'>
              Recent Transactions
            </h4>
            <div className='w-28 border-1 border-color px-2 py-1 rounded-md'>
              <Dropdown data={dropdownData} color={currentColor} />
            </div>
          </div>

          <div className='mb-4 pb-2 border-b'>
            {recentTransactions.map((item, i) => (
              <div
                key={i}
                className='flex justify-between items-center mb-4'
              >
                <div className='flex items-center gap-3'>
                  <div
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className='text-2xl font-semibold  w-14 h-14 rounded-lg flex justify-center items-center'
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className='font-semibold'> {item.title}</h4>
                    <span className='text-sm font-semibold text-slate-400'>
                      {item.desc}
                    </span>
                  </div>
                </div>
                <div className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.amount}
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-between items-center'>
            <Button content='Add' className='px-2' />
            <p className='text-sm text-slate-300 dark:text-slate-200'>
              36 Recent Transactions
            </p>
          </div>
        </div>
        <div className='lgx:w-780 bg-white dark:bg-secondary-dark-bg rounded-lg p-4 w-full'>
          <div className='flex justify-between items-center mb-4'>
            <h4 className='text-lg font-semibold dark:text-slate-200'>
              Sales Overview
            </h4>
            <div className='w-28 border-1 border-color px-2 py-1 rounded-md'>
              <Dropdown data={dropdownData} color={currentColor} />
            </div>
          </div>
          <div className='w-full min-w-[320px]'>
            <LineChart data={lineCustomSeries} />
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-center mt-5 gap-8'>
        <div className='md:w-400 bg-white dark:bg-secondary-dark-bg rounded-lg px-4 py-4 w-[320px] dark:text-slate-200'>
          <div className='flex justify-between items-center mb-6'>
            <h4 className='text-lg font-semibold dark:text-slate-200'>
              Weekly Stats
            </h4>
            <BsThreeDots className='text-xl dark:text-slate-200 cursor-pointer' />
          </div>

          <div>
            {weeklyStats.map((item, i) => (
              <div
                key={i}
                className='mb-3 flex justify-between items-center'
              >
                <div className='flex items-center gap-3'>
                  <div
                    style={{ backgroundColor: item.iconBg }}
                    className='text-2xl text-white w-12 h-12 flex justify-center items-center rounded-full'
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <span className='text-sm dark:text-slate-400'>
                      {item.desc}
                    </span>
                  </div>
                </div>
                <span className={`text-${item.pcColor}`}>
                  {item.amount}
                </span>
              </div>
            ))}
          </div>

          <div className='flex justify-center'>
            <SparkLineChart
              color='#f2fcfd'
              type='Area'
              id='sparkline_3'
              height='150px'
              width='320px'
              currentColor={currentColor}
              data={SparklineAreaData}
            />
          </div>
        </div>
        <div className='md:w-400 bg-white dark:bg-secondary-dark-bg rounded-lg px-4 py-4 w-[320px]'>
          <div className='flex justify-between items-center mb-6'>
            <h4 className='text-lg font-semibold dark:text-slate-200'>
              MedicalPro Branding
            </h4>
            <BsThreeDots className='text-xl dark:text-slate-200 cursor-pointer' />
          </div>
          <div>
            <span
              className='bg-[#edb125] font-semibold text-slate-200 text-sm px-2 rounded-lg 
            hover:drop-shadow-md cursor-pointer '
            >
              16 APR,2022
            </span>
            <div className='flex border-b mt-4'>
              {medicalproBranding.data.map((item, i) => (
                <div key={i} className='pb-2 px-4 border-r text-sm'>
                  <span className='text-slate-400 text-xs dark:text-slate-400'>
                    {item.title}
                  </span>
                  <p className='dark:text-white font-semibold'>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='py-2 border-b'>
            <span className='text-lg font-semibold dark:text-slate-200'>
              Teams
            </span>
            <div className='flex items-center gap-x-3'>
              {medicalproBranding.teams.map((item, i) => (
                <div
                  key={i}
                  style={{ backgroundColor: item.color }}
                  className='text-white text-xs inline-block my-1 py-[2px] 
                  px-2 rounded-lg hover:drop-shadow-md cursor-pointer'
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <div className='py-2 border-b mb-8'>
            <span className='text-lg font-semibold dark:text-slate-200'>
              Leader
            </span>
            <div className='flex items-center gap-x-3'>
              {medicalproBranding.leaders.map((item, i) => (
                <img
                  src={item.image}
                  alt='image'
                  key={i}
                  className='text-white text-xs inline-block my-1 w-8 h-8 rounded-full'
                />
              ))}
            </div>
          </div>

          <div className='flex justify-between items-center'>
            <Button content='Add' className='px-2' />
            <p className='text-sm text-slate-300 dark:text-slate-400'>
              36 Recent Transactions
            </p>
          </div>
        </div>
        <div className='md:w-400 bg-white dark:bg-secondary-dark-bg rounded-lg px-4 py-4 w-[320px]'>
          <div className='flex justify-between items-center mb-6'>
            <h4 className='text-lg font-semibold dark:text-slate-200'>
              MedicalPro Branding
            </h4>
            <BsThreeDots className='text-xl dark:text-slate-200 cursor-pointer' />
          </div>
          <div>
            <img className='h-48 w-full' src={product9} alt='image' />
          </div>
          <div className='py-4'>
            <p className='font-semibold dark:text-slate-200'>
              React 18 coming soon!
            </p>
            <p className='text-sm text-slate-400'>By BaoBao Doe</p>
          </div>

          <p className='text-slate-400 text-xs mb-2'>
            This will be the small description for the news you have
            shown here. There could be some great info.
          </p>

          <Button content='Read More' className='inline-block px-2' />
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
