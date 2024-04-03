import React from 'react';
import { MainStyled } from './mainSection.styled';
import { Footer } from 'components/Footer/footer';
import { MessageForm } from 'components/MessageForm/mainForm';

export const MainSection = () => {
  return (
    <>
      <MainStyled>
        <MessageForm />
      </MainStyled>
      <Footer></Footer>
    </>
  );
};
