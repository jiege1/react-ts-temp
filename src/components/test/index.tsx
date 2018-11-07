
// import { ReactElement } from 'react';

import * as React from 'react';

export interface ITestProps {
  name: string;
}

export default function(props: ITestProps) {
  return (
    <div>
      {props.name}
    </div>
  );
}

export function hoc(Com: any): any {
  return Com;
}
