import { AuthType, Datasource } from "entities/Datasource";
import React from "react";
import OAuth from "./OAuth";
import TestSaveDeleteAuth from "./TestSaveDeleteAuth";

interface Props {
  datasource: Datasource;
  formData: Datasource;
  getSanitizedFormData: () => Datasource;
  isInvalid: boolean;
  shouldRender: boolean;
}

function DatasourceAuth({
  datasource,
  formData,
  getSanitizedFormData,
  isInvalid,
  shouldRender,
}: Props) {
  const authType =
    formData &&
    formData.datasourceConfiguration.authentication?.authenticationType;

  switch (authType) {
    case AuthType.OAUTH2:
      return (
        <OAuth
          datasource={datasource}
          getSanitizedFormData={getSanitizedFormData}
          isInvalid={isInvalid}
          shouldRender={shouldRender}
        />
      );

    case AuthType.DBAUTH:
      return (
        <TestSaveDeleteAuth
          datasource={datasource}
          getSanitizedFormData={getSanitizedFormData}
          isInvalid={isInvalid}
          shouldRender={shouldRender}
        />
      );

    default:
      return (
        <TestSaveDeleteAuth
          datasource={datasource}
          getSanitizedFormData={getSanitizedFormData}
          isInvalid={isInvalid}
          shouldRender={shouldRender}
        />
      );
  }
}

export default DatasourceAuth;
