import Test, { hoc, ITestProps } from 'components/test';
import * as React from 'react';
import * as css from './index.less';

// interface ILayoutProps {
//   testList: ITestProps[];
// }

interface ILayoutState {
  test: number;
}

@hoc
export default class Layout extends React.Component<{}, ILayoutState> {

  constructor(props) {
    super(props);
    this.state = {
      test: 1,
    };
  }

  public componentDidMount() {
    const a = '123';
  }

  public render() {
    return (
      <div className={css.layout}>
        react-temp
        <Test name={`test_${this.state.test}`} />
      </div>
    );
  }
}
