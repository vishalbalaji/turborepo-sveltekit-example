import SvelteKitAuth from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import Github from '@auth/core/providers/github';
import Credentials from '@auth/core/providers/credentials';
import {
	GOOGLE_ID, GOOGLE_SECRET, GITHUB_ID, GITHUB_SECRET,
} from '$env/static/private';

export const handle = SvelteKitAuth({
	providers: [
		Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET }),
		Github({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
		Credentials({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, _req) {
				if (!credentials) return null;
				// Add logic here to look up the user from the credentials supplied
				const user = {
					id: '1', name: 'J Smith', email: 'jsmith@example.com', image: 'https://i.pravatar.cc/300',
				};

				if (user.name === credentials.username && credentials.password === 'keyboard_cat') {
					return user;
				}
				return null;
			},
		}),
	],
});
