import React, { useContext } from 'react'
import { ThemeContext } from './ContextGlobal';

export default function ComponentC() {
  const context = useContext(ThemeContext);

  return (
    <div className={context.theme}>ComponentC</div>
  )
}
