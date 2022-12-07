import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems: MenuItem[] = [
	{
	  name: 'Animate 101',
	  icon: 'cube-outline',
	  component: 'Animation101Screen',
	},
	{
	  name: 'Animate 102',
	  icon: 'albums-outline',
	  component: 'Animation102Screen',
	},	
	{
		name: 'Switches',
		icon: 'toggle-outline',
		component: 'SwitchScreen',
	},	
	{
		name: 'Alerts',
		icon: 'alert-circle-outline',
		component: 'AlertScreen',
	},	
	{
		name: 'TextInputs',
		icon: 'alert-circle-outline',
		component: 'TextInputScreen',
	},		
	{
		name: 'Pull to refresh',
		icon: 'refresh-outline',
		component: 'PullToRefreshScreen',
	},		
	{
		name: 'Section list',
		icon: 'list-outline',
		component: 'CustomeSectionListScreen',
	},		
	{
		name: 'Modal',
		icon: 'copy-outline',
		component: 'ModalScreen',
	},		
	{
		name: 'Infinite Scroll',
		icon: 'download-outline',
		component: 'InfiniteScrollScreen',
	},		
	{
		name: 'Slides',
		icon: 'flower-outline',
		component: 'SlidesScreen',
	},
    {
        name: 'Themes',
        icon: 'flask-outline',
        component: 'ChangeThemeScreen'
    },	
  ];