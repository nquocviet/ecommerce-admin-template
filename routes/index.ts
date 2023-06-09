import { ROLES } from '@/constants/roles'

const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	PRODUCTS: '/products',
	PRODUCT_DETAILS: '/products/[id]',
	COLLECTION_DETAILS: '/collections/[id]',
	ORDERS: '/orders',
	ORDER_DETAILS: '/orders/[id]',
	CUSTOMERS: '/customers',
	CUSTOMER_DETAILS: '/customers/[id]',
	CUSTOMER_GROUP_DETAILS: '/customers/groups/[id]',
	DISCOUNTS: '/discounts',
	GIFT_CARDS: '/gift-cards',
	GIFT_CARD_MANAGE: '/gift-cards/manage',
	GIFT_CARD_DETAILS: '/gift-cards/[id]',
	PRICING: '/pricing',
	MESSAGES: '/messages',
	CALENDAR: '/calendar',
	KANBAN: '/kanban',
	FAQS: '/faqs',

	SETTINGS: {
		DEFAULT: '/settings',
		CURRENCIES: '/settings/currencies',
		PERSONAL_INFORMATION: '/settings/personal-information',
		REGIONS: '/settings/regions',
		RETURN_REASONS: '/settings/return-reasons',
		SALE_CHANNELS: '/settings/sale-channels',
		STORE_DETAILS: '/settings/store-details',
		TAXES: '/settings/taxes',
		TEAM: '/settings/team',
	},
} as const

const routeConfig: { [key: string]: { [key: string]: string } } = {
	AUTH: {
		default: ROUTES.LOGIN,
		[ROUTES.LOGIN]: ROUTES.LOGIN,
		[ROUTES.REGISTER]: ROUTES.REGISTER,
	},
	[ROLES.ADMIN]: {
		default: ROUTES.HOME,
		[ROUTES.HOME]: ROUTES.HOME,
		[ROUTES.PRODUCTS]: ROUTES.PRODUCTS,
		[ROUTES.PRODUCT_DETAILS]: ROUTES.PRODUCT_DETAILS,
		[ROUTES.COLLECTION_DETAILS]: ROUTES.COLLECTION_DETAILS,
		[ROUTES.ORDERS]: ROUTES.ORDERS,
		[ROUTES.ORDER_DETAILS]: ROUTES.ORDER_DETAILS,
		[ROUTES.CUSTOMERS]: ROUTES.CUSTOMERS,
		[ROUTES.CUSTOMER_DETAILS]: ROUTES.CUSTOMER_DETAILS,
		[ROUTES.CUSTOMER_GROUP_DETAILS]: ROUTES.CUSTOMER_GROUP_DETAILS,
		[ROUTES.DISCOUNTS]: ROUTES.DISCOUNTS,
		[ROUTES.GIFT_CARDS]: ROUTES.GIFT_CARDS,
		[ROUTES.GIFT_CARD_MANAGE]: ROUTES.GIFT_CARD_MANAGE,
		[ROUTES.GIFT_CARD_DETAILS]: ROUTES.GIFT_CARD_DETAILS,
		[ROUTES.PRICING]: ROUTES.PRICING,
		[ROUTES.MESSAGES]: ROUTES.MESSAGES,
		[ROUTES.CALENDAR]: ROUTES.CALENDAR,
		[ROUTES.KANBAN]: ROUTES.KANBAN,
		[ROUTES.FAQS]: ROUTES.FAQS,
		[ROUTES.SETTINGS.DEFAULT]: ROUTES.SETTINGS.DEFAULT,
		[ROUTES.SETTINGS.CURRENCIES]: ROUTES.SETTINGS.CURRENCIES,
		[ROUTES.SETTINGS.PERSONAL_INFORMATION]:
			ROUTES.SETTINGS.PERSONAL_INFORMATION,
		[ROUTES.SETTINGS.REGIONS]: ROUTES.SETTINGS.REGIONS,
		[ROUTES.SETTINGS.RETURN_REASONS]: ROUTES.SETTINGS.RETURN_REASONS,
		[ROUTES.SETTINGS.SALE_CHANNELS]: ROUTES.SETTINGS.SALE_CHANNELS,
		[ROUTES.SETTINGS.STORE_DETAILS]: ROUTES.SETTINGS.STORE_DETAILS,
		[ROUTES.SETTINGS.TAXES]: ROUTES.SETTINGS.TAXES,
		[ROUTES.SETTINGS.TEAM]: ROUTES.SETTINGS.TEAM,
	},
}

export { routeConfig, ROUTES }
