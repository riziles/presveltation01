<script lang="ts">
	import { page } from '$app/stores';

	import './docs.css';
	import 'highlight.js/styles/base16/dracula.css';

	import Navbar from '../../docs/Navbar.svelte';
	import Sidebar from '../../docs/Sidebar.svelte';
	import BottomNav from '../../docs/BottomNav.svelte';
	import { theme } from '../../docs/stores';
	import type { SideMenu } from '../../docs/types';

	let sideMenus: SideMenu[] = [
		{
			name: 'Getting Started',
			route: '/',
			subMenus: [
				{ name: 'Project Structure', route: '/#project-structure' },
				{ name: 'Slides Folder', route: '/#slides-folder' },
				{ name: 'Notes Folder', route: '/#notes-folder' }
			]
		}
	];

	$: currentPageIdx = sideMenus.findIndex((v) => v.route === $page.url.pathname);
	$: previousPage = currentPageIdx === 0 ? null : sideMenus[currentPageIdx - 1];
	$: nextPage = currentPageIdx === sideMenus.length - 1 ? null : sideMenus[currentPageIdx + 1];
</script>

<div class:dark={$theme === 'dark'}>
	<div class="h-full min-h-screen dark:bg-gradient-to-tr dark:from-[#10032c] dark:to-purple-900">
		<Navbar {sideMenus} />

		<div class="flex h-full min-h-screen">
			<aside class="sticky top-14 hidden h-[calc(100vh-3.5em)] overflow-y-auto md:block">
				<Sidebar {sideMenus} />
			</aside>
			<div class="mx-auto w-11/12 pt-20 pb-56 md:w-3/6 md:max-w-3xl">
				<slot />
				<div class="mt-12 w-full">
					<BottomNav previous={previousPage} next={nextPage} />
				</div>
			</div>
		</div>
	</div>
</div>
