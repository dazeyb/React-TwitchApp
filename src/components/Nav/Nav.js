import "./Nav.css";

function Nav(props) {
  const { username, avatar } = props.user;

  return (
    <header className='header'>
      <nav className='header__left'>
        <span className='icon'>
          <img
            src='https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png'
            alt='logo'
          />
        </span>
        <a href='/' className='nav__item'>
          Following
        </a>
        <a href='/' className='nav__item'>
          Browse
        </a>
        <a href='/' className='nav__item'>
          Esports
        </a>
        <a href='/' className='nav__item'>
          Music
        </a>
      </nav>
      <nav className='header__right'>
        <img className='user' src={avatar} alt='user avatar' />
      </nav>
    </header>
  );
}

export default Nav;
