import NextAuth from 'next-auth';
import { Provider } from 'next-auth/providers';
import CredentialsProvider from 'next-auth/providers/credentials';
export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'username', type: 'text', placeholder: 'email' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials, req) {
                const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' };
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return { jwt: '123', ...user };
                } else {
                    // If you return null or false then the credentials will be rejected
                    return null;
                    // You can also Reject this callback with an Error or with a URL:
                    // throw new Error("error message") // Redirect to error page
                    // throw "/path/to/redirect"        // Redirect to a URL
                }
            }
        })
    ]
});
