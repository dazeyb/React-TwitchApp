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
      <img src={previewChannel} alt='preview' />
      <span className='viewer_count'>{viewerCount}</span>
      <h4>{title}</h4>
      <img src={avatar} alt='avatar' />
      <h5>{username}</h5>
      <h5>{category}</h5>
      <div className='tags'>{generateTags(tags)}</div>
    </div>
  );
}

export default ChannelPreview;
