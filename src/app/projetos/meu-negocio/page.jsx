'use client';
import React from 'react';
import { Project } from '../../components/projects';
import { myBusinessData } from './myBusinessData';

export default function MyBusiness() {
  return <Project project={myBusinessData} />;
}
