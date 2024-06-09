import React from 'react';

const with${componentName} = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default with${componentName};
