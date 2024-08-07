import React from 'react'
const bg = require('../assets/background-removebg-preview.png');

function Splash() {
  return (
  <>
  <div class="w-full h-full" style={{backgroundColor: '#00072D',}}>
<img
          class="hidden object-scale-down w-full h-screen md:block"
          src={bg}
        />
  </div>
  </>
  )
}

export default Splash