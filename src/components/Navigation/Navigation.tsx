import React, { FC, ReactElement } from 'react';
import { TNavigationProps } from './Navigation.types';
import { Link } from 'react-router-dom';

export const Navigation: FC<TNavigationProps> = (props: TNavigationProps): ReactElement => {
  return <nav>
    <ul>
      <li>
        <Link to="/">mobx</Link>
      </li>
      <li>
        <Link to="/effector">effector</Link>
      </li>
    </ul>
  </nav>;
};

