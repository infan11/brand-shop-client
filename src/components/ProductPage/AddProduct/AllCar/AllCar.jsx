
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Order from './Order';
const AllCar = () => {
    const [products , setProducts] = useState([])
    useEffect(() =>{
        fetch("http://localhost:5000/product")
        .then(res => res.json())
        .then(data => setProducts(data))
        console.log();
    },[]);
const brandName = ["Bmw" , "Ford", "Honda" , "Tesla" , "Toyota","Mercedes-Benz" ];
const {brand} = useParams()
const initalIndex = brandName.indexOf(brand)
const [tabIndex , setTabIndex] = useState(initalIndex)
const Bmw = products.filter(item => item.brand === "Bmw")
const Ford = products.filter(item => item.brand === "Ford")
const Honda = products.filter(item => item.brand === "Honda")
const Tesla = products.filter(item => item.brand === "Tesla")
const Toyota = products.filter(item => item.brand === "Toyota")
const Mercedes  = products.filter(item => item.brand === "Mercedes")

    return (
        <div className=''>
       <div className="  bg-yellow-600 text-center p-2 mt-7 rounded-2xl mx-auto w-1/2 gap-5 ">
            <div className="text-3xl text-white font-mono ">
                <p>AUTOMOBILE ALL CAR </p>
            </div>
        </div>
        <br />
  <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index) } >
    <TabList>
      <Tab>Bmw</Tab>
      <Tab>Ford</Tab>
      <Tab>Honda</Tab>
      <Tab>Tesla</Tab>
      <Tab>Toyota</Tab>
      <Tab>Mercedes</Tab>
    </TabList>

    <TabPanel><Order items={Bmw}></Order></TabPanel>
    <TabPanel><Order items={Ford}></Order></TabPanel>
    <TabPanel><Order items={Honda}></Order></TabPanel>
    <TabPanel><Order items={Tesla}></Order></TabPanel>
    <TabPanel><Order items={Toyota}></Order></TabPanel>
    <TabPanel><Order items={Mercedes}></Order></TabPanel>
   
  </Tabs>

        </div>
    );
};

export default AllCar;