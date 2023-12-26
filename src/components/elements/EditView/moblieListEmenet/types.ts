import { RefObject } from 'react';

export type SingleInputProps = {
  value: string;
  setValue: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  handleDelete: () => void;
  isCurrentlyEditing: boolean;
  index: number;
  resourceRef: RefObject<(HTMLInputElement | HTMLTextAreaElement)[]>;
};

export type EditComponentType = {
  value: string;
  index: number;
  setValue: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  handleDelete: () => void;
  isCurrentlyEditing: boolean;
  resourceRef: RefObject<(HTMLInputElement | HTMLTextAreaElement)[]>;
};
