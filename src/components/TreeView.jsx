import React from 'react'
import PropTypes from 'prop-types';
class TreeView extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
 
   handleClick() {
    console.log("here")
    this.setState({collapsed: !this.state.collapsed});
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const {
      collapsed =  this.state.collapsed,
      className = '',
      itemClassName = '',
      nodeLabel,
      children,
    } = this.props;

    let arrowClassName = 'tree-view_arrow';
    let containerClassName = 'tree-view_children';
    if (collapsed) {
      arrowClassName += ' tree-view_arrow-collapsed';
      containerClassName += ' tree-view_children-collapsed';
    }

    const arrow =
      <div
        className={className + ' ' + arrowClassName}
        onClick={() => this.handleClick()}/>;

    return (
      <div className="tree-view">
        <div className={'tree-view_item ' + itemClassName}>
          {arrow}
          {nodeLabel}
        </div>
        <div className={containerClassName}>
          {children}
        </div>
      </div>
    );
  }
};

TreeView.propTypes= {
  collapsed: PropTypes.bool,
  defaultCollapsed: PropTypes.bool,
  nodeLabel: PropTypes.node.isRequired,
  className: PropTypes.string,
  itemClassName: PropTypes.string,
}

export default TreeView
  