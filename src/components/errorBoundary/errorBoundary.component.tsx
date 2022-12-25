import React, { Component, ErrorInfo, ReactNode } from 'react';

type Props = Record<string, unknown>;
type State = {
  error: Error,
  errorInfo: ErrorInfo
};

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });
  }

  render(): JSX.Element | ReactNode {
    const { children } = this.props;
    const { error, errorInfo } = this.state;

    if (errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return children;
  }
}
