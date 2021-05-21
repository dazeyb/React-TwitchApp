import "./ChannelPreview.css";

function Tag(props) {
  return <span className='tag'>{props.tag}</span>;
}

function ChannelPreview(props) {
  const {
    title,
    previewChannel,
    viewerCount,
    avatar,
    username,
    category,
    tags,
  } = props.channel;

  const generateTags = tags => {
    return tags.map(function (tag, i) {
      return <Tag key={i} tag={tag} />;
    });
  };

  return (
    <div className='Channel-Preview'>
      <div className='channel__image'>
        <img src={previewChannel} alt='preview' />
        <div className='color-backdrop'></div>
        <span className='viewer_count'>{viewerCount}k viewers</span>
      </div>
      <div className='channel__info'>
        <img src={avatar} alt='avatar' />
        <div className='channel__info__details'>
          <h4>{title}</h4>
          <h5>{username}</h5>
          <h5>{category}</h5>
          <div className='tags'>{generateTags(tags)}</div>
        </div>
      </div>
    </div>
  );
}

export default ChannelPreview;
