import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: string;
    gridPoints: number;
    colors: {
      [key: string]: string;
    };
  }
}
