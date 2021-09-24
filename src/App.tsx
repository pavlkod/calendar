import { FC, useEffect } from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

const App: FC = () => {
  const {setUser, setIsAuth } = useActions()
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
      setUser({username: localStorage.getItem('username')} as IUser)
    } else {
      setIsAuth(false)
      setUser({} as IUser)
    }
  }, [])
  return (
    <Layout>
      <Navbar />
      <Content>
        <AppRouter/>
      </Content>
    </Layout>
  );
}

export default App;
