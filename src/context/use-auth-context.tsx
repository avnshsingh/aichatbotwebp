import React, { useState } from "react";

type initialValuesProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const initialValues: initialValuesProps = {
  currentStep: 0,
  setCurrentStep: () => {},
};

const useAuthContext = React.createContext(initialValues);

const { Provider } = useAuthContext;

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState<number>(
    initialValues.currentStep
  );
  return (
    <Provider value={{ currentStep, setCurrentStep }}>{children}</Provider>
  );
};

export const useAuthContextHook = () => {
  const state = React.useContext(useAuthContext);
  return state;
};
