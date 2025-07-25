import Button from "./Button";
import { size } from "./IButton";
import {IButton, variant} from './IButton'
import {action} from 'storybook/actions'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes:{
    size:{
      control: {type:"inline-radio"},
      options: Object.values(size)
    },
    color:{
      control:{type: 'color'}
    },
    onMyClick:{
      action: 'clicked'
    }
  }
}


export const Primary = {
  args:{
    label: 'Click Me',
    size: size.small
  }
 
};

export const PrimaryMedium = {
  args: {
    label: "Click Me",
    size: "medium",
    onMyClick: action('clikeeeee')
  }
};
