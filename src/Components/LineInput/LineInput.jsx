import React, {Component} from 'react';

import 'public/css/kui.css';
import style from './LineInput.css';


export default class LineInput extends Component{
  render(){
    return (
      <div className={style.container} style={this.props.style || {}}>
        <label className="k-iconfont">{this.props.Icon || ''}</label>
        <input 
          type={this.props.type || "text"} 
          className={style.input} 
          placeholder={this.props.placeholder || ""}
          defaultValue={this.props.value || ""}
          onChange={this.props.onChange}
          onKeyUp={this.props.onKeyUp}
          name={this.props.name || ''}
        />
      </div>
    );
  }
}