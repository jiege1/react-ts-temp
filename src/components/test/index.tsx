
// import { ReactElement } from 'react';
import * as React from 'react';

export interface IProps {
  name: string;
}

export default function(props: IProps) {
  return (
    <div>
      {props.name}
    </div>
  );
}

export function hoc(Com: any): any {
  return Com;
}
