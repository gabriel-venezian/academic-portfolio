'use client';
import React from 'react';
import { Project } from '../../components/projects/index';
import { academicPortfolioData } from './academicPortfolioData';

export default function KidsAcademy() {
  return <Project project={academicPortfolioData}></Project>;
}
