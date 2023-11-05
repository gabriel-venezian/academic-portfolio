'use client';
import React from 'react';
import { Project } from '../../components/projects/index';
import { kidsAcademyData } from './kidsAcademyData';

export default function KidsAcademy() {
  return <Project project={kidsAcademyData}></Project>;
}
