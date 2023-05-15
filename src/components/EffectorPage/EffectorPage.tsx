import React, {FC, ReactElement} from "react";
import { TEffectorPageProps } from "./EffectorPage.types";
import { CounterButton } from './components/CounterButton';
import { Todo } from './components/Todo';

export const EffectorPage: FC<TEffectorPageProps> = (props: TEffectorPageProps): ReactElement => {
    return <>
    <CounterButton />
    <Todo />
    </>;
}

