
import * as React from 'react';

export interface Props {
  name: string,
}

export default function(props: Props) {
  return (
    <div>
      {props.name}
    </div>
  );
}