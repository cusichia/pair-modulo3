function Menu() {

     const handleClickShowMenu = () => {
       const menu = document.querySelector('.jsx-menu');
       menu.classList.add('active');
       menu.classList.remove('hidden');
   
     }
   
     const handleClickHideMenu = () => {
       const menu = document.querySelector('.jsx-menu');
       menu.classList.add('hidden');
       menu.classList.remove('active');
   
     }
   
     return (
       <>
       <div>
         <i className="fa-solid fa-bars jsx-hamburger" onClick={handleClickShowMenu}></i>
         <div className='jsx-menu hidden'>
         <i className="fa-solid fa-arrow-left jsx-arrow"  onClick={handleClickHideMenu}></i> 
              <ul>
                 <li><a href="#">Inicio</a></li>
                 <li><a href="#">Servicios</a></li>
                 <li><a href="#">Contacto</a></li>
                 <li><a href="#">Sobre nosotros</a></li>
              </ul>
         </div>
       </div>
       </>
     );
   }
   
   export default Menu;
   