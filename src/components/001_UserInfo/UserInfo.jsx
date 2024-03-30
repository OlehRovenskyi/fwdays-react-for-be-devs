import './UserInfo.scss';
export function UserInfo({name, age}) {
  return (
    <>
      <div className="user-name">{name}</div>
      <div className="user-age">{age}</div>
    </>
  )
}