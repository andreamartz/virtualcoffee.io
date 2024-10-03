import type { MemberObject } from '../types';
import { profileMasks } from '../flare';

// Change _EXAMPLE to `yourGitHubUserName` and add your info below
export const andreamartz: MemberObject = {
	// GitHub username (required)
	github: 'andreamartz',
	//
	// Everything below here is optional. By default, we pull most profile data from your GitHub profile. You can override that data here, as well as provide some additional account links below.
	//
	// Name - If not defined here, it will default to your display name on GitHub. If that's not defined, then your GitHub username.
	name: 'Andrea Martz',
	//
	// Main URL - If not defined here, it will default to the website displayed on your GitHub profile. If that's not defined, then a link to your GitHub profile will be displayed.
  mainUrl: 'https://andreamartz.dev/',
  //
	// Bio - Accepts [markdown](https://spec.commonmark.org/0.30/). Please keep your bio to a reasonable length. Refer to our [members page](https://virtualcoffee.io/members/) for examples.
	//	bio: `Full-stack dev | Avid learner | Passionate about education and equity & using tech to make it happen`,
	bio: `Fullstack software engineer | NextJS | ReactJS | Node | ExpressJS | Passionate about education, equity, and accessibility`,
	//
	// flare - If you want to add a flare to your profile, you can do so here.
	// Uncomment the `import { profileMasks } from '../flare';` line at the top of this file to use the profileMasks.
	// So far  all we have is a profile mask, which makes your profile picture a different shape from the default square.
	// Leave this out if you prefer the default square.
	// You can choose from the following profile masks:
	// profileMasks.octogon, profileMasks.hexagon, profileMasks.triangle,
	// profileMasks.circle, profileMasks.rabbet, profileMasks.star
	// you can also use a custom string. the profileMask values are [css clipPath values](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
	flare: {
		profileMask: profileMasks.circle,
	},
	//
	// Links - You can add one of each type, except website - you can add as many `website` accounts as you wish.
	accounts: [
		{ type: 'linkedin', username: 'andreamartz' },
		// { type: 'dev', username: 'yourUserName' },
		// { type: 'codenewbie', username: 'yourUserName' },
		{ type: 'twitter', username: 'amartzcoder' },
		// { type: 'twitch', username: 'yourUserName' },
		// { type: 'youtube', channelId: 'yourChannelId' }, OR { type: 'youtube', customUrl: 'https://www.youtube.com/c/yourCustomUrl' },
		// { type: 'polywork', username: 'yourUserName' },
		// { type: 'medium', username: 'yourUserName' },
		// { type: 'hashnode', username: 'yourUserName' },
		// { type: 'mastodon', url: 'https://mastodon.server/@username' },
		// { type: 'website', url: 'https://virtualcoffee.io', title: 'Title of link' },
		{
			type: 'website',
			url: 'https://andreamartz.dev/',
			title: "Andrea's Portfolio",
		},
	],
	badges: ['Hacktoberfest2024'],
	// Add your location to our member map at https://virtualcoffee.io/members (optional)
	// Feel free to be as specific or vague as you're comfortable with.
	location: {
		latitude: 44.97997,
		longitude: -93.26384,
		title: 'Minneapolis, MN', // optional
	},
};
