import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import './App.css';

const App = () => {
  return (
    <div className='underline text-3xl'>

        <BrowserRouter >
        <div className='flex relative dark:bg-main-bg'>
            <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
                <TooltipComponent content="settings" position="top">
                    <button type='button' className='text-3xl p-3 hover:drop-shadow-xl gover-bg-light-gray text-white' style={{background:'blue', borderRadius:'50%'}}>
                        <FiSettings />
                    </button>
                </TooltipComponent>
            </div>

        </div>

        </BrowserRouter>
    </div>
  )
}

export default App