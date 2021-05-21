import ChannelPreview from "../ChannelPreview/ChannelPreview";
import "./ChannelList.css";

function ChannelList(props) {
  const channels = [
    {
      title: "Playing Games with friends",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/a2592e98-5ba6-4c9a-9d9e-cf036d6f64c2-profile_image-50x50.jpg",
      username: "Rubius",
      category: "Minecraft",
      tags: ["spanish"],
      previewChannel:
        "https://static-cdn.jtvnw.net/previews-ttv/live_user_rubius-440x248.jpg",
      viewerCount: 46.8,
      _id: "asd9f87as9d8f9a8sd7",
    },
    {
      title: "Check out the new update!",
      avatar:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/5099c6a9-6e94-4ff3-887a-9b1bc666fd48-profile_image-50x50.png",
      username: "Robleis",
      category: "Just Chatting",
      tags: ["updates", "english"],
      previewChannel:
        "https://static-cdn.jtvnw.net/previews-ttv/live_user_robleis-440x248.jpg",
      viewerCount: 18.2,
      _id: "asd9f87876ds8f9a8sd7",
    },
  ];

  const generateChannels = channels => {
    return channels.map(function (channel) {
      return <ChannelPreview key={channel._id} channel={channel} />;
    });
  };

  return (
    <div className='Channel-List'>
      <h1>{props.header}</h1>
      <div className='channels'>{generateChannels(channels)}</div>
    </div>
  );
}

export default ChannelList;
