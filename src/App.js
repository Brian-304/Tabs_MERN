import './App.css';
import React, { useState } from 'react';
import Tab from './components/Tab';


function App() {
  const [tabs, setTabs] = useState([
    {
      name: "Tab 1",
      content: "Tab 1 content is showing here"
    },
    {
      name: "Tab 2",
      content: "Tab 2 content is showing here"
    },
    {
      name: "Tab 3",
      content: "Tab 3 content is showing here"
    }
  ])

  const [viewTab, setViewTab] = useState(tabs[0].content);

  const handleViewTab = (idx) => {
    setViewTab(tabs[idx].content);
    console.log(tabs[idx].content);
  }


  return (
    <div className="App">
      <h1>Tabs</h1>
      {/* {JSON.stringify(tabs)} */}
      {
        tabs.map((tab, idx) => {
          return <button className='btn btn-primary m-2' onClick={() => handleViewTab(idx)}>{tab.name}</button>

        })
      }
      <Tab viewTab={viewTab}/>
    </div>
  );
}

export default App;
