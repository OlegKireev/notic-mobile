import { gql } from '@apollo/client';

export const SIGNIN_USER = gql`
    mutation signIn($email: String, $password: String!) {
      signIn(email: $email, password: $password)
    }
`;

export const SIGNUP_USER = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
       signUp(email: $email, username: $username, password: $password)
    }
`;
