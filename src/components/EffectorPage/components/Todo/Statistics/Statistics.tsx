import React, { FC, ReactElement } from 'react';
import { TStatisticsProps } from './Statistics.types';

export const Statistics: FC<TStatisticsProps> = ({text}): ReactElement => {
  return <div>
    {text}
  </div>;
};

