import { Component, PropsWithChildren } from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundaryLayout extends Component<
  PropsWithChildren,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <img
            alt='Страница в разработке'
            src='/images/illustrations/in-dev.svg'
          />
          <p className='mb-3 mt-10 text-3xl font-bold text-white'>
            Что-то сломалось
          </p>
          <button onClick={() => window.location.reload()}>Обновить</button>
        </>
      );
    }

    return this.props.children;
  }
}
