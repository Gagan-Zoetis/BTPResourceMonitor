/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  Certificate,
  NameOnly,
  Certificates,
  Attributes,
  Update,
  BulkResponse,
  BulkDelete,
  PublicKeys
} from './schema';
/**
 * Representation of the 'CertificatesOnServiceInstanceSubscriptionLevelApi'.
 * This API is part of the 'SAP_CP_CF_Connectivity_Destination' service.
 */
export const CertificatesOnServiceInstanceSubscriptionLevelApi = {
  /**
   * Get all certificates (as a JSON array) posted on service instance
   * level. If none is found, an empty list is returned. Service instance and subaccount
   * are determined by the passed OAuth access token.
   *
   * For requests which return a large number of certificates, chunked handling of the response will be enabled. If an error occurs with the request processing while chunking is enabled, no response will be returned to the client.
   *
   * Note: The maximum length of the `<path>?<query>#<fragment>` part of [a URI](https://tools.ietf.org/html/rfc3986#section-3) is 4000 characters.
   *
   * @param queryParameters - Object containing the following keys: $filter, $select, $page, $pageSize, $pageCount, $entityCount.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getInstanceCertificates: (queryParameters?: {
    $filter?: string;
    $select?: 'Name';
    $page?: number;
    $pageSize?: number;
    $pageCount?: true | false;
    $entityCount?: true | false;
  }) =>
    new OpenApiRequestBuilder<Certificate | NameOnly[]>(
      'get',
      '/instanceCertificates',
      {
        queryParameters
      }
    ),
  /**
   * Update a certificate (base64 encoded string, as a JSON object) or certificates (base64 encoded string, as a JSON array) or certificate attributes (certificate is generated by destination service) or certificate attributes with CSR (certificate is generated by destination service via externally provided CSR. The subject DN in the CSR is ignored. Only PEM certificate can be generated.) on service instance level. Service instance and subaccount is determined by the passed OAuth access token.
   * @param body - The certificate (base64 encoded string, as a JSON object) / Certificates (base64 encoded string, as a JSON array) / Certificate attributes / Certificate attributes with CSR (base64 encoded PEM)
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  updateInstanceCertificates: (body: Certificate | Certificates | Attributes) =>
    new OpenApiRequestBuilder<Update | BulkResponse[] | any>(
      'put',
      '/instanceCertificates',
      {
        body
      }
    ),
  /**
   * Post a new certificate (base64 encoded string, as a JSON object) or new certificates (base64 encoded string, as a JSON array) or certificate attributes (certificate is generated by destination service) or certificate attributes with CSR (certificate is generated by destination service via externally provided CSR. The subject DN in the CSR is ignored. Only PEM certificate can be generated.) on service instance level. Service instance and subaccount are determined by the passed OAuth access token.
   * @param body - The certificate (base64 encoded string, as a JSON object) / Certificates (base64 encoded string, as a JSON array) / Certificate attributes / Certificate attributes with CSR (base64 encoded PEM)
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createInstanceCertificates: (body: Certificate | Certificates | Attributes) =>
    new OpenApiRequestBuilder<any | any>('post', '/instanceCertificates', {
      body
    }),
  /**
   * Deletes certificates posted on service instance level. Service
   * instance and subaccount are determined by the passed OAuth access token.
   *
   * Note: The maximum length of the `<path>?<query>#<fragment>` part of [a URI](https://tools.ietf.org/html/rfc3986#section-3) is 4000 characters.
   *
   * @param queryParameters - Object containing the following keys: $filter.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteInstanceCertificates: (queryParameters: { $filter: string }) =>
    new OpenApiRequestBuilder<BulkDelete>('delete', '/instanceCertificates', {
      queryParameters
    }),
  /**
   * Get a certificate (base64 encoded string, as a JSON object) posted on service instance level. Service instance and subaccount are determined by the passed OAuth access token.
   * @param certificateName - Certificate name
   * @param headerParameters - Object containing the following keys: If-None-Match, If-Match.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getInstanceCertificatesByCertificateName: (
    certificateName: string,
    headerParameters?: { 'If-None-Match'?: string; 'If-Match'?: string }
  ) =>
    new OpenApiRequestBuilder<Certificate>(
      'get',
      '/instanceCertificates/{certificateName}',
      {
        pathParameters: { certificateName },
        headerParameters
      }
    ),
  /**
   * Deletes a certificate posted on service instance level. Service instance and subaccount are determined by the passed OAuth access token.
   * @param certificateName - Certificate name
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  deleteInstanceCertificatesByCertificateName: (certificateName: string) =>
    new OpenApiRequestBuilder<Update>(
      'delete',
      '/instanceCertificates/{certificateName}',
      {
        pathParameters: { certificateName }
      }
    ),
  /**
   * Get a certificate chain in PEM format (Base64 encoded string, as a JSON object) of a specified certificate. In case of a keystore, the response will contain certificate chain for each alias. The public part of password-protected keystores can be retrieved only for PEM certificates and certificates generated using attributes. Service instance and subaccount are determined by the passed OAuth access token.
   * @param certificateName - Certificate name on instance level
   * @param headerParameters - Object containing the following keys: If-None-Match, If-Match.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  getInstanceCertificatesPublicKeysByCertificateName: (
    certificateName: string,
    headerParameters?: { 'If-None-Match'?: string; 'If-Match'?: string }
  ) =>
    new OpenApiRequestBuilder<PublicKeys>(
      'get',
      '/instanceCertificates/{certificateName}/publicKeys',
      {
        pathParameters: { certificateName },
        headerParameters
      }
    )
};
