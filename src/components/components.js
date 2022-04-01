
const UserInfo = ({ avatarSrc, name }) => (
    <div className="user-info">
      <img className="avatar" alt="avatar" src={avatarSrc} />
      <p>{name}</p>
    </div>
  );

const MyExtractingAfter = ({ artistName, nameHref, albumPictSrc, albumTitle, albumHref, playlistHref}) => (
    <div className="container album">
        <img className="albumPict" alt="albumPict" src={albumPictSrc} />
        <p>Title: <a className="link" href={albumHref}>{albumTitle}</a></p>
        <p>Artist: <a className="link" href={nameHref}>{artistName}</a></p>
        <button onClick={playlistHref}>Select</button>
    
    </div>
    
  );

export default MyExtractingAfter