import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

const CryptoTable = ({ data }) => {
    const generateChangeColor = (value) => 
        value >= 0 ? 'text-green-500' : 'text-red-500';
  return (
    <div className='md:overflow-x-auto p-2 md:p-4 flex items-center justify-center'>
        <div className='hidden md:block'>
            <table className='w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='px-2 py-3 text-left text-xs font-medium md:px-4 md:text-sm'>#</th>
                        <th className='px-2 py-3 text-left text-xs font-medium md:px-4 md:text-sm'>Name</th>
                        <th className='px-2 py-3 text-left text-xs font-medium md:px-4 md:text-sm'>Price</th>
                        <th className='px-2 py-3 text-left text-xs font-medium md:px-4 md:text-sm'>1h%</th>
                        <th className='px-2 py-3 text-left text-xs font-medium md:px-4 md:text-sm'>24h%</th>
                        <th className='px-2 py-3 text-left text-xs font-medium md:px-4 md:text-sm'>7d%</th>
                        <th className='px-2 py-3 text-left text-xs font-medium md:px-4 md:text-sm'>Market Cap</th>
                        <th className='px-2 py-3 text-left text-xs font-medium md:px-4 md:text-sm'>Volume(24h)</th>
                        <th className='px-2 py-3 text-left text-xs font-medium md:px-4 md:text-sm'>Circulating Supply</th>
                        <th className='px-2 py-3 text-left text-xs font-medium md:px-4 md:text-sm'>Last 7 Days</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-100 bg-white'>
                    {data.map((coin) => (
                        <tr key={coin.id} className='hover:bg-gray-50'>
                            <td className='whitespace-nowrap px-2 py-2 text-xs md:px-4 md:text-sm text-gray-900'>
                                {coin.id}
                            </td>
                            <td className='whitespace-nowrap px-2 py-2 text-xs md:px-4 md:text-sm text-gray-900'>
                                <div className='flex items-center'>
                                    <img src={coin.logo} alt={coin.name} className='h-4 w-4 md:h-6 md:w-6 mr-1 md:mr-2'/>
                                    <div className='flex flex-col md:flex-row md:items-center'>
                                        <span className='font-semibold mr-0 md:mr-2 text-xs md:text-sm '>{coin.name}</span>
                                        <span className='text-gray-500 text-xxs md:text-xs'>{coin.symbol}</span>
                                    </div>
                                </div>
                            </td>
                            <td className='whitespace-nowrap px-2 py-2  md:px-4 text-xs md:text-sm text-right'>
                                ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2})}
                            </td>
                            <td className={`whitespace-nowrap px-2 py-2 md:px-4 text-xs md:text-sm text-right hidden sm:table-cell ${generateChangeColor(coin.change1h)}`}>
                                {coin.change1h >= 0 ? '+' : ''}{coin.change1h.toFixed(2)}%
                            </td>
                            <td className={`whitespace-nowrap px-2 py-2 md:px-4 text-xs md:text-sm text-right ${generateChangeColor(coin.change24h)}`}>
                                {coin.change24h >= 0 ? '+' : ''}{coin.change24h.toFixed(2)}%
                            </td>
                            <td className={`whitespace-nowrap px-2 py-2 md:px-4 text-xs md:text-sm text-right hidden lg:table-cell ${generateChangeColor(coin.change7d)}`}>
                                {coin.change7d >= 0 ? '+' : ''}{coin.change7d.toFixed(2)}%
                            </td>
                            <td className='whitespace-nowrap px-2 py-2 text-xs text-right md:px-4 md:text-sm hidden md:table-cell'>
                                ${coin.marketCap.toLocaleString()}
                            </td>
                            <td className='px-2 py-2 md:px-4 text-xs md:text-sm text-right'>
                                <div className='flex flex-col items-center'>
                                    <span className='text-right'>${coin.volume24h.toLocaleString()}</span>
                                    <span className='text-gray-600 text-right text-sm'>{coin.formattedVolume24h}</span>
                                </div>
                            </td>
                            <td className='px-4 py-2 text-sm text-gray-900 text-right'> 
                                ${coin.circulatingSupply}
                            </td>
                            <td className='px-4 py-2 text-center'>
                                <div className='flex justify-center'>
                                    <Sparklines data={[coin.price * 0.9 , coin.price * 1.1, coin.price]} width={100} height={50}>
                                        <SparklinesLine className='stroke-current' style={{ strokeWidth: 2 }} color='#3B82F6'/>
                                    </Sparklines>
                                </div>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className='md:hidden space-y-3 w-screen flex flex-col items-center justify-center'>
                    {data.map((coin) => (
                        <div key={coin.id} className="w-5/6 bg-white rounded-lg p-2 m-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <img 
                                 src={coin.logo}
                                 alt={coin.name}
                                 className="w-8 h-8 mr-3"
                                />
                            <div>
                                    <div className='flex items-baseline'>
                                        <h3 className='font-semibold text-sm mr-2'>{coin.name}</h3>
                                        <span className="text-gray-500 text-xs">{coin.symbol}</span>
                                    </div>
                                    <div  className="flex items-center mt-1">
                                        <span className="text-sm mr-2">
                                                ${coin.price.toLocaleString(undefined, { 
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2 
                                                })}
                                        </span>
                                        <span className={`text-xs ${generateChangeColor(coin.change24h)}`}>
                                            ({coin.change24h >= 0 ? '+' : ''}{coin.change24h.toFixed(2)}%)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                                <div className='space-y-1'>
                                    <p className='text-gray-500'>Market Cap</p>
                                    <p>
                                        ${coin.marketCap.toLocaleString(undefined, {
                                        notation: 'compact',
                                        maximumFractionDigits: 1
                                        })}
                                    </p>
                                </div>
                                <div className='space-y-1'>
                                    <p className="text-gray-500">24h Volume</p>
                                    <p>
                                        ${coin.volume24h.toLocaleString(undefined, {
                                        notation: 'compact',
                                        maximumFractionDigits: 1
                                        })}
                                    </p>
                                </div>
                                <div className='space-y-1'>
                                    <p className="text-gray-500">Last 7 Days</p>
                                    <div className="-ml-2">
                                        <Sparklines 
                                         data={[coin.price * 0.9, coin.price * 1.1, coin.price]}
                                         width={80} 
                                         height={30}
                                        >
                                            <SparklinesLine className='stroke-current' 
                                                style={{ strokeWidth: 1.5 }} 
                                                color='#3B82F6'
                                            />
                                        </Sparklines>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <p className="text-gray-500">Supply</p>
                                    <p>
                                        {coin.circulatingSupply.toLocaleString(undefined, {
                                            notation: 'compact',
                                            maximumFractionDigits: 1
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
        </div>

    </div>
  )
}

export default CryptoTable