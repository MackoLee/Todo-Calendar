'use client';

import { RecoilRoot } from 'recoil';
import React from 'react';

interface RecoilClientRootProps {
  children: React.ReactNode;
}

export default function RecoilClientRoot({
  children,
}: RecoilClientRootProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
