import './App.css';
import React from 'react';
import { Layout } from 'antd';
import routes from '../../routers/index';
import { Route, Routes } from 'react-router-dom';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content
        style={{
          height: '100vh',
          backgroundColor: '#fff',
        }}
      >
        <Routes>
          {routes.map((route, index) =>
            route && route.children && route.children.length > 0 ? (
              route.children.map((item, index) => <Route key={index} path={item.path} element={<item.main />} />)
            ) : (
              <Route key={index} path={route.path} element={<route.main />} />
            ),
          )}
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
