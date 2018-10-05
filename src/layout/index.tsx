import * as React from 'react';
import Test from 'components/test';
import * as css from './index.less';

export interface Props {

}

interface State {
  test: number,
}

export default class Layout extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      test: 1,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={css.layout}>
        react-temp
        <Test name={`test_${this.state.test}`} />
      </div>
    );
  }
}