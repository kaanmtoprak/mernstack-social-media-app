import { Dropdown } from 'antd';
import './header.scss';
import { useAuth } from '../../context/AuthContext';
import toastFunction from '../Toast';

const Header = () => {
  const {user,logout} = useAuth()

  console.log()

  const logoutFunction = async () =>{
    toastFunction('success',"You are logged out successfully!")
      setTimeout(()=>{
        logout()
      },3000)
  }

  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: <span onClick={logoutFunction}>Log Out</span>,
      key: '3',
    },
  ];

  return (
    <header className='header'>
        <div className="header__logo">
            <span>LOGO</span>
        </div>
        <div className="header__action">
            <span className='header__action__icon'><i className='icon-search'></i></span>
            <span className='header__action__icon'><i className='icon-bell'></i></span>
            <Dropdown
              menu={{
                items
              }}
              trigger={['click']}
            >
              <div className='header__action__profile'>
              <figure>
                <img src="images/profile-img.png" alt="profile" />
              </figure>
              <span>{user.user.name} {user.user.surname}</span>
              <i className='icon-chevron-down'></i>
              </div>
            </Dropdown>

        </div>
    </header>
  )
}

export default Header