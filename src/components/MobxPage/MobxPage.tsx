import React, { FC, ReactElement } from 'react';
import { TMobxPageProps } from './MobxPage.types';
import { CounterButton } from './components/CounterButton';
import { Todo } from './components/Todo';

export const MobxPage: FC<TMobxPageProps> = (props: TMobxPageProps): ReactElement => {
  return <>
    <CounterButton/>
    <Todo/>
  </>;
};

