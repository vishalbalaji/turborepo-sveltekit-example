import SvelteKitAuth from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import Github from '@auth/core/providers/github';
import { GOOGLE_ID, GOOGLE_SECRET, GITHUB_ID, GITHUB_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
  providers: [
    Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET }),
    Github({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
  ],
});
