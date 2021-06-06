import React from 'react';
import CheckBox, { Props } from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import '../../assets/scss/checkbox.scss';

interface CustomEvent {
  nativeEvent: any;
  preventDefault:() => void;
  stopPropagation:() => void;
  target: {checked: boolean; value: string};

}

interface ICheckbox extends Props {
  title: string;

  onChangeCustom(e: CustomEvent | any): void;
}

const CheckboxCustom = ({ onChangeCustom, title, ...rest }: ICheckbox) => (
  <div className="custom-checkbox-container">
    <CheckBox
      className="custom-checkbox"
      onChange={(e) => {
        onChangeCustom(e);
      }}
      {...rest}
    />
    <span>{title}</span>
  </div>
);

export default CheckboxCustom;
