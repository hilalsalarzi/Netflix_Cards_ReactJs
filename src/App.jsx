import React from 'react';
import Heading from './Componant/Headings';
import Paragraph from './Componant/Paragraph';
import OrderList from './Componant/OrderList';
import Greeting from './Componant/Greeting';
import Gallery from './Componant/Gallery';
import Addres,{myAddress} from './Componant/Addres';
import * as biodat from './Componant/BioData';


// here we are making componants 
function App(){
return (<>
    <Heading/>
    <Paragraph/>
    <OrderList/>
    <Paragraph/>
    <Greeting/>
    <Gallery/>
   <h1>{Addres}</h1>
   <h1>{myAddress}</h1>
   <h1>{biodat.default}</h1>
   {/* how to call object from another file */}
   <h1>{biodat.address.primaryadd}</h1> 
   <h1>{biodat.address.secodaryadd}</h1>
   <h1>{biodat.education()}</h1>
   



    {/* <h1 style={{textAlign:"center"}}>Hello Sir, <span style={cssStyle}>{greating()}</span></h1>
     */}
    </>)
};
export default App;