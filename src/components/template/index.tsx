import React from 'react';

import Header from '../header';

import { Container, PageContext, HeadTitle } from './styles';

interface TemplateComponents {
  childComp?: React.ReactNode;
  childText: string;
}

const Template: React.FC<TemplateComponents> = props => {
  const { childComp, childText } = props;

  return (
    <Container>
      <Header />
      <HeadTitle>
        <h1>{childText}</h1>
      </HeadTitle>
      <PageContext>{childComp}</PageContext>
    </Container>
  );
};

export default Template;
