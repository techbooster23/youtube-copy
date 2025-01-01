import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';
import Banner from '../../Components/Banner Add/Banner';

const Home = ({sidebar}) => {

  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />

      <div className={`container ${sidebar ? "" : 'large-container'}`}>
        <Banner />
        <Feed category={category} />
      </div>
    </>
  )
}

export default Home;