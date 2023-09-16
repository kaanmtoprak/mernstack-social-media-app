import {Link} from 'react-router-dom';
import './sidebar.scss';
import classNames from 'classnames';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const {user} = useAuth()
  
  console.log(window.location.pathname)
    return (
      <aside className="sidebar">
          <nav className="sidebar__nav">
             <Link className={classNames('sidebar__nav__link',{"active-link" : window.location.pathname === "/"} )} to ='/'><span><i className='icon-home'></i>Home</span><i className='icon-chevron-right'></i></Link>
             <Link className={classNames('sidebar__nav__link',{"active-link" : window.location.pathname === `/${user.user.username}`} )} to ={`/${user.user.username}`}><span><i className='icon-group'></i>Profile</span><i className='icon-chevron-right'></i></Link>
             <Link className={classNames('sidebar__nav__link',{"active-link" : window.location.pathname === "/notifications"} )} to ='/notifications'><span><i className='icon-bell'></i>Notifications</span><i className='icon-chevron-right'></i></Link>
             <Link className={classNames('sidebar__nav__link',{"active-link" : window.location.pathname === "/messages"} )} to ='/messages'><span><i className='icon-chat'></i>Messages</span><i className='icon-chevron-right'></i></Link>
             <Link className={classNames('sidebar__nav__link',{"active-link" : window.location.pathname === "/settings"} )} to ='/settings'><span><i className='icon-settings'></i>Settings</span><i className='icon-chevron-right'></i></Link>
          </nav>
          <div className="sidebar__logout">
          <Link to ='/'><i className='icon-logout-light'></i><span>Log out</span></Link>
          
          </div>

      </aside>
    )
  }
  
  export default Sidebar