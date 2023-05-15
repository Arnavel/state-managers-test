import React, { ReactElement } from 'react';
import { observer } from 'mobx-react-lite';
import { useAppStore } from '~/hooks/useAppStore';

export const StatisticsComponent = (): ReactElement => {
  const store = useAppStore('todoStore');

  return <div>
    {store.statistics}
  </div>;
};

export const Statistics = observer(StatisticsComponent);
