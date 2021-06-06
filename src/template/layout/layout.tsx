import React from 'react';
import Home from '../pages/home/home';
import Content from './content/content';
import Footer from './footer/footer';
import Header from './header/header';

export default function Layout() {
  return (
    <>
      <Header />
      <Content>
        <Home />
      </Content>
      <Footer />
    </>
  );
}
