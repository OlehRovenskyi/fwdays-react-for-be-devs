import {createContext, useContext, useState} from "react";
import langContext from "../../Providers/langProvider.jsx";



function Header() {
  const lang = useContext(langContext);

  function changeLang() {
    lang.setLang(lang.value === 'en' ? 'ua' : 'en');
  }

  return (
    <>
      <h4>User List <button onClick={() => changeLang()}>change lang</button></h4>
    </>
  )
}

function UserItem({user}) {
  const lang = useContext(langContext);

  return (
    <li>{user.name} language: {lang.value} </li>
  )
}

export function UserList() {
  const users = [{
    name: 'Vic',
    id: 1
  },
    {
      name: 'Arni',
      id: 2
  }];
  const [lang, setLang] = useState('en');
  const langContextObj = {
    value: lang,
    setLang: setLang,
  }

  return (
    <>
      <langContext.Provider value={langContextObj}>
       <Header />

        {users && users.map(
          (user) => <UserItem key={user.id} user={user} />)
        }
      </langContext.Provider>
    </>
  )
}