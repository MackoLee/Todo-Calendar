'use client';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React from 'react';

interface RecoilClientRootProps {
  children: React.ReactNode;
}

export default function ClientProviders({
  children,
}: RecoilClientRootProps) {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
}
