import { useContext } from 'react';
import { CrashlyticsContext } from '../contexts/crashLyticsContext';

export const useCrashlytics = () => {
  const context = useContext(CrashlyticsContext);
  if (!context) {
    throw new Error('useCrashlytics debe usarse dentro de ProviderCrashlyticsContextComponent');
  }
  return context;
};