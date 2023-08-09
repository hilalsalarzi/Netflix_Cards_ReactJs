import React from 'react';
import Heading from './Componant/Headings';
import Paragraph from './Componant/Paragraph';
import OrderList from './Componant/OrderList';
import Greeting from './Componant/Greeting';
import Gallery from './Componant/Gallery';


// here we are making componants 
function App(){
return (<>
    <Heading/>
    <Paragraph/>
    <OrderList/>
    <Paragraph/>
    <Greeting/>
    <Gallery/>


    {/* <h1 style={{textAlign:"center"}}>Hello Sir, <span style={cssStyle}>{greating()}</span></h1>
     */}
    </>)
};
export default App;