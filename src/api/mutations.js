import { gql } from '@apollo/client';

export const SIGNIN_USER = gql`
    mutation signIn($email: String, $password: String!) {
      signIn(email: $email, password: $password)
    }
`;
