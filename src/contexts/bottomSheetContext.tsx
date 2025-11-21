import React, { createContext, useContext, useRef, ReactNode, useEffect } from 'react';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

interface BottomSheetContextType {
  bottomSheetRef: React.RefObject<BottomSheetModal | null>;
  //showBottomSheet: () => void;
  hideBottomSheet: () => void;
}

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(
  undefined
);

export const BottomSheetProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

 /*  const showBottomSheet = () => {
    bottomSheetRef.current?.present();
  };

  useEffect(() => {
    bottomSheetRef.current?.present();
  }, []); */

  const hideBottomSheet = () => {
    bottomSheetRef.current?.dismiss();
  };

  const value: BottomSheetContextType = {
    bottomSheetRef,
    //showBottomSheet,
    hideBottomSheet,
  };

  return (
    <BottomSheetModalProvider>
      <BottomSheetContext.Provider value={value}>
        {children}
      </BottomSheetContext.Provider>
    </BottomSheetModalProvider>
  );
};

export const useBottomSheet = (): BottomSheetContextType => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error('useBottomSheet must be used within BottomSheetProvider');
  }
  return context;
};
