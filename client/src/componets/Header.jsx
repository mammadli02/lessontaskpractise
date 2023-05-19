import React from 'react'
import Button from '@mui/material/Button';
import style from "./header.module.css"
const Header = () => {
  return (
    <>


    <div className={style.header} >
      
  <ul className={style.ul}>

    <div style={{display:'flex', justifyContent:'space-between', width:'40%'}}>


    <li className={style.li}><a className={style.a} style={{textDecoration:'none',}} href='#'>Brandname</a></li>

    <div style={{display:'flex', justifyContent:'space-between',alignItems:"center"}}>
    <li style={{marginRight:'20px'}}   ><a className={style.a} style={{textDecoration:'none',}} href='#'>Home</a></li>
    <li  style={{marginRight:'20px'}} ><a className={style.a} style={{textDecoration:'none'}} href='#'>Product</a></li>
    <li  style={{marginRight:'20px'}} ><a className={style.a} style={{textDecoration:'none'}} href='#'>Pricing</a></li>
    <li  style={{marginRight:'20px'}} ><a className={style.a} style={{textDecoration:'none'}} href='#'>Contact</a></li>
   
    </div> 
        
    </div>
    <div style={{display:"flex", alignItems:"center"}}>  
        <li style={{marginRight:'20px'}}><a className={style.a} style={{textDecoration:'none'}} href='#'>Login</a></li>
    <Button style={{backgroundColor:'#FF6551'}} variant="contained">Join us  </Button> 
    </div>    
   
</ul>


    
    
<div style={{margin:'200px auto' , width:'100%', display:'flex', justifyContent:'center',alignItems:'center'}}>
<div>

<h5 style={{color:'#FF6551',textAlign:'center',
fontWeight: '700',
fontSize: '16pxx',
lineHeight:'24px'
}} >For Better Future</h5>
<h1 style={{
fontWeight: '700',
fontSize: '58px',
lineHeight: '80px',
textAlign: 'center',
color: '#FFFFFF'}}>25K+ STUDENTS 
TRUST US</h1>
<h4 style={{
fontWeight: '400',
fontSize: '20px',
lineHeight: '30px',
textAlign: 'center',
color: '#FFFFFF'}} >Find the right instructor for you from over 10,000 teachers</h4>
<div style={{textAlign:'center'}}>
<Button style={{backgroundColor:'#FF6551', marginRight:'10px'}} variant='conained'>Get Quote Now</Button>
<Button style={{color:'#FF6551'}} variant="outlined">Learn More</Button>
</div>
</div>


</div>

</div>






    </>










  
  )
}

export default Header
