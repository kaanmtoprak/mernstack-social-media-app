import {Link} from 'react-router-dom';
import './sidebar.scss';

const Sidebar = () => {
    return (
      <aside className="sidebar">
          <nav className="sidebar__nav">
             <Link to ='/'><span><i className='icon-home'></i>Home</span><i className='icon-chevron-right'></i></Link>
             <Link to ='/'><span><i className='icon-group'></i>Profile</span><i className='icon-chevron-right'></i></Link>
             <Link to ='/'><span><i className='icon-bell'></i>Notifications</span><i className='icon-chevron-right'></i></Link>
             <Link to ='/'><span><i className='icon-chat'></i>Messages</span><i className='icon-chevron-right'></i></Link>
             <Link to ='/'><span><i className='icon-settings'></i>Settings</span><i className='icon-chevron-right'></i></Link>
          </nav>
          <div className="sidebar__logout">
          <Link to ='/'><i className='icon-logout-light'></i><span>Log out</span></Link>
          
          </div>

      </aside>
    )
  }
  
  export default Sidebar