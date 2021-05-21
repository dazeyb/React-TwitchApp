import ChannelList from "../ChannelList/ChannelList";

function Home(props) {
  const { username } = props.user;

  return (
    <div className='Home'>
      <h1>Welcome, {username}</h1>
      <ChannelList header="Live Channel we think you'll love" />
      <ChannelList header='Recommended Minecraft Channels' />
      <ChannelList header='Recommended Just Chatting Channels' />
    </div>
  );
}

export default Home;
