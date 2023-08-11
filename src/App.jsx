import React from 'react';
import Card from './Componant/Card';


// here we are making componants 
function App(){
return (<>
<h1>Netflix Top Series</h1>
  <Card
imagsrc="https://occ-0-1242-64.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSVghXDiK7Be9t09GDn2ICBe81bp8TXYIRP2XQHXeMntL4Z06Dm8rESm8IriGPYINUa0aoTGccyBiwbqWsjaU8iZlT1iPJtE805v.jpg?r=48c"
  alt="The Mother"
  title="A Original Series"
  name="The Mother"
  link="https://www.netflix.com/pk/title/80210920"
  />

<Card
imagsrc="https://occ-0-1242-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVzK0WDYg25vbQmF-I_m7TbFf0ygL5v_nsAM5uAVRH3Qo1xYLNwbKLnULyVRB3_Ruwt4Q4rrtzej01JH4ruT7XjXb3Tw49lryp9h.jpg?r=e3d"
  alt="A Man Called Otto"
  title="A Original Series"
  name="A Man Called Otto"
  link="https://www.netflix.com/pk/title/81616256"

  />

  <Card
imagsrc="https://occ-0-1242-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf4nv_JcOqOOMHJHBMzeFqoLqReWis-lPMsfYRLpqjkWObMbvMlZzvwNue8EaWTqd2o71XKHMy3Wjhu4bGKe_ikmZbc3OHB9hBk6.jpg?r=d8d"
  alt="Inside Man"
  title="A Original Series"
  name="Inside Man"
  link="https://www.netflix.com/pk/title/70044379"

  />
  
    </>)
};
export default App;