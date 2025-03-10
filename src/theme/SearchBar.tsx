import React, {type ReactNode} from 'react';
import SearchBar from '@theme-original/SearchBar';
import type SearchBarType from '@theme/SearchBar';
import type {WrapperProps} from '@docusaurus/types';
import { DocSearchButton, useDocSearchKeyboardEvents } from "@docsearch/react";
type Props = WrapperProps<typeof SearchBarType>;

export default function SearchBarWrapper(props: Props): ReactNode {
  return (
    <div className='hidden'>
      <SearchBar   {...props} />
      {/* <DocSearchButton/> */}
    </div>
  );
}
