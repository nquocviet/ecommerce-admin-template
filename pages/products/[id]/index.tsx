import React from 'react'

import { ROLES } from '@/constants/roles'
import { withAuth } from '@/hocs'
import ProductDetails from '@/page-components/products/[id]'

const ProductDetailsPage = () => {
	return <ProductDetails />
}

export default withAuth({
	Component: ProductDetailsPage,
	allowedRoles: [ROLES.ADMIN],
})
