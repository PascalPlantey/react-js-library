import SVGIcon from '../../components/icons/SVGIcon';

export default {
  title: 'Components/SVGIcon',
  component: SVGIcon,
  tags: ['autodocs'],
  argTypes: {
    size: { type: 'number' },
    className: { type: 'string' },
    color: { control: 'color' },
    cursor: { type: 'string' },
    style: { type: 'object' }
  }
};

export const Default = {
  args: {
    name: 'delete',
  }
};

export const Small = {
  args: {
    name: 'delete',
    cursor: 'pointer',
    size: 12
  }
};

export const Large = {
  args: {
    name: 'delete',
    cursor: 'pointer',
    size: 48
  }
};