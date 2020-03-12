import React from 'react';

import './menu-container.styles.scss'


class MenuContainer extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        activeItem: '',
        activeItemPosition: 0,
        activeItemColor: '',
        menuItems: [
          { text: 'jebac' },
          { text: 'disa' },
          { text: 'kurwe' },
          { text: 'zwisa' },
          { text: 'orka' },
        ],
      }
      
      this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(activeItem) {
      return e => {
        e.preventDefault()
      
        this.setState({
          activeItem,
          activeItemPosition: document.getElementById(activeItem).offsetTop,
          activeItemColor: window.getComputedStyle(document.getElementById(activeItem)).getPropertyValue('background-color'),
        })
      }
    }
    
    render() {
      const menuItems = this.state.menuItems.map(item => <MenuItem item={ item } handleClick={ this.handleClick }/>)
      return (
        <div className='menu-container'>
          <span className='menu-item--active' style={{ top: this.state.activeItemPosition, backgroundColor: this.state.activeItemColor }}/>
          { menuItems }
        </div>
      )
    }
  }

  function MenuItem(props) {
    return (
      <div 
        className='menu-item'
        id={ props.item.text }
        onMouseEnter={ props.handleClick(props.item.text) }
      >
        { props.item.text.toUpperCase() }
      </div>
    )
  }

 export default MenuContainer;