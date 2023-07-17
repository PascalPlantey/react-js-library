import WindowSize from "./WindowSize";

export default {
  title: 'Hooks/Browser/useWindowSize',
  component: WindowSize,
  tags: ['autodocs']
};

export const WithDefaultParameters = {
  args: {
    step: 30
  }
};

export const DontStartImmediately = {
  args: {
    immediately: false
  }
};

export const TrackEveryPixel = {
  args: {
    step: 0
  }
};