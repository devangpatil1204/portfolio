// src/types/gsap-trial.d.ts
declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: string | Element, vars?: {
      type?: string | string[];
      chars?: boolean;
      words?: boolean;
      lines?: boolean;
      linesClass?: string;
      position?: string;
      // Add any other options you use
    });
    
    // These properties exist on the SplitText instance
    chars: HTMLElement[];  // Array of character elements
    words: HTMLElement[];  // Array of word elements
    lines: HTMLElement[];  // Array of line elements
    
    // Methods
    revert(): void;
    split(vars?: any): void;
  }
}
